import { useEffect, useState } from 'react';

import * as API from '../services/ApiFetchServise';
// eslint-disable-next-line
import Loader from 'components/Loader/Loader'; // eslint-disable-next-line
import ResponseError from 'components/Errors/ResponseError';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

// movie/popular?language=en-US&page=${page}

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
    API.FetchMovies(`movie/popular?language=en-US`, `${page}`)
      .then(data => {
        if (page > 1) {
          setPopularMovie(prevState => [...prevState, ...data.results]);
          return;
        }

        setPopularMovie(data.results);
      })
      .catch(error => setError(error));
  }, [page]);

  return (
    <>
      <UniversalMovieList movieList={popularMovie} setPage={setPage} />
      {popularMovie.length > 0 && <LoadMoreBtn setPage={setPage} />}
    </>
  );

  // if (status === Status.PENDING) {
  //   return <Loader />;
  // }
  // if (status === Status.RESOLVED) {
  //   return <PopularMoviesList movieList={popularMovie} setPage={setPage} />;
  // }
  // if (status === Status.REJECTED) {
  //   return <ResponseError error={error} />;
  // }
}

export default Popular;
