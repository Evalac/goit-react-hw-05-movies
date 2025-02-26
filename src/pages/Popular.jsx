import { useEffect, useState } from 'react';

import { options, BASE_URL } from 'services/OptionsAPI';

import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';
import MovieList from 'components/MovieList/MovieList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Popular(params) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  async function fetchPopularMovies(params) {
    try {
      const responce = await fetch(
        `${BASE_URL}/movie/popular?language=en-US&page=2`,
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
    fetchPopularMovies()
      .then(data => {
        setPopularMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.RESOLVED) {
    return <MovieList movieList={popularMovie.results} />;
  }
  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }
}

export default Popular;
