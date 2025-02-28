import { useEffect, useState } from 'react';
import * as API from '../services/ApiFetchServise';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';
import Loader from 'components/Loader/Loader';

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
          setMovies(prevState => [...prevState, ...data.results]);
          setStatus(Status.RESOLVED);
          return;
        }
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setError(error);
      });
  }, [page]);

  // if (status === Status.PENDING) {
  //   return <Loader />;
  // }

  // if (status === Status.RESOLVED) {
  //   return <UniversalMovieList movieList={movies} setPage={setPage} />;
  // }

  return <UniversalMovieList movieList={movies} setPage={setPage} />;
}

export default NowPlayingPage;
