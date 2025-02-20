import { useState, useEffect } from 'react';
import { options, BASE_URL } from 'services/OptionsAPI';

import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    try {
      console.log('виконується фетч на сторінці HOME');

      const responce = await fetch(
        `${BASE_URL}/trending/movie/day?language=en-US`,
        options
      );
      const data = await responce.json();
      return data;
    } catch (error) {
      throw new Error('Вибаче щось пішло не так');
    }
  }

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovies()
      .then(data => {
        setMovieList(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    // eslint-disable-next-line
  }, []);

  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.RESOLVED) {
    return <MovieList movieList={movieList} />;
  }

  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }
}

export default Home;
