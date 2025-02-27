import { useEffect, useState } from 'react';

import { options, BASE_URL } from 'services/OptionsAPI';

import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';
import PopularMoviesList from 'components/PopularMovies/PopularMoviesList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Popular(params) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  async function fetchPopularMovies() {
    try {
      const responce = await fetch(
        `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
        options
      );
      if (!responce.ok) {
        throw new Error(`HTTP error! Status: ${responce.status}`);
      }
      const data = await responce.json();
      return data;
    } catch (error) {
      throw new Error('Вибачте щось пішло не так');
    }
  }

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchPopularMovies()
      .then(data => {
        if (page > 1) {
          setPopularMovie(prevState => [...prevState, ...data.results]);
          setStatus(Status.RESOLVED);
          return;
        }
        setPopularMovie(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      }); // eslint-disable-next-line
  }, [page]);

  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.RESOLVED) {
    return <PopularMoviesList movieList={popularMovie} setPage={setPage} />;
  }
  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }
}

export default Popular;
