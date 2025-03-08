import { useState, useEffect } from 'react';
import * as API from '../services/ApiFetchServise';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';

// trending/movie/week?language=en-US

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Home() {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    API.FetchMovies(`trending/movie/week?language=en-US`, `${page}`)
      .then(data => {
        if (page > 1) {
          setMovieList(prevState => [...prevState, ...data.results]);
          setStatus(Status.RESOLVED);
          return;
        }

        setMovieList(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page]);

  return <UniversalMovieList movieList={movieList} setPage={setPage} />;

  // if (status === Status.PENDING) {
  //   return <Loader />;
  // }
  // if (status === Status.REJECTED) {
  //   return <ResponseError error={error} />;
  // }
  // if (status === Status.RESOLVED) {
  //   return <UniversalMovieList movieList={movieList} setPage={setPage} />;
  // }
}

export default Home;
