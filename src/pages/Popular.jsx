import { useEffect, useState } from 'react';

import * as API from '../services/ApiFetchServise';
// eslint-disable-next-line
import Loader from 'components/Loader/Loader'; // eslint-disable-next-line
import ResponseError from 'components/Errors/ResponseError';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Popular() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);
    setIsLoading(true);
    API.FetchMovies(`movie/popular?language=en-US`, `${page}`)
      .then(data => {
        if (page > 1) {
          setPopularMovie(prevState => [...prevState, ...data.results]);
          setStatus(Status.RESOLVED);
          setIsLoading(false);
          return;
        }

        setPopularMovie(data.results);
        setStatus(Status.RESOLVED);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page]);

  if (status === Status.PENDING && page === 1) {
    return <Loader />;
  }
  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }

  return (
    <>
      <UniversalMovieList movieList={popularMovie} setPage={setPage} />
      {isLoading && <Loader />}
      {popularMovie.length > 0 && <LoadMoreBtn setPage={setPage} page={page} />}
    </>
  );
}

export default Popular;
