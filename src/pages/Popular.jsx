import { useEffect, useState, useCallback, useMemo } from 'react';

import * as API from '../services/ApiFetchServise';
// eslint-disable-next-line
import Loader from 'components/Loader/Loader'; // eslint-disable-next-line
import ResponseError from 'components/Errors/ResponseError';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

console.log(useCallback);
console.log(useMemo);

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Popular(params) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [page, setPage] = useState(1); // eslint-disable-next-line
  const [error, setError] = useState(null); // eslint-disable-next-line
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    API.FetchMovies(`movie/popular?language=en-US`, `${page}`)
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
      });
  }, [page]);

  if (status === Status.PENDING && page === 1) {
    return <Loader />;
  }
  if (status === Status.RESOLVED) {
    return (
      <>
        <UniversalMovieList movieList={popularMovie} setPage={setPage} />
        {popularMovie.length > 0 && <LoadMoreBtn setPage={setPage} />}
      </>
    );
  }
  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }
}

export default Popular;
