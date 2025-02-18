import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';

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

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c',
    },
  };

  async function fetchMovies() {
    try {
      console.log('виконується фетч на сторінці HOME');

      const responce = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
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
    return <p>Завантажуєм фільми...</p>;
  }
  if (status === Status.RESOLVED) {
    return <MovieList movieList={movieList} />;
  }

  if (status === Status.REJECTED) {
    return <p>{error.message}</p>;
  }
}

export default Home;
