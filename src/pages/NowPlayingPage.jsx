import { useEffect, useState } from 'react';
import * as API from '../services/ApiFetchServise';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';
import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function NowPlayingPage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    API.FetchMovies(`movie/now_playing?language=en-US`, `${page}`)
      .then(data => {
        if (page > 1) {
          // setStatus(Status.PENDING);
          setMovies(prevState => [...prevState, ...data.results]);
          setStatus(Status.RESOLVED);
          return;
        }
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally();
  }, [page]);

  return <UniversalMovieList movieList={movies} setPage={setPage} />;

  // if (status === Status.PENDING) {
  //   return <Loader />;
  // }

  // if (status === Status.REJECTED) {
  //   return <ResponseError error={error} />;
  // }

  // if (status === Status.RESOLVED) {
  //   return <UniversalMovieList movieList={movies} setPage={setPage} />;
  // }
}

export default NowPlayingPage;
