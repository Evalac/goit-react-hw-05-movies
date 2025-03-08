import { useEffect, useState } from 'react';

import * as API from '../services/ApiFetchServise';

import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

function UpcomingMoviesPage(params) {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]); // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    API.FetchMovies(`movie/upcoming?language=en-US`, `${page}`)
      .then(data => {
        if (page > 1) {
          setMovies(prevState => [...prevState, ...data.results]);
          return;
        }
        setMovies(data.results);
      })
      .catch(error => setError(error));
  }, [page]);

  return (
    <>
      <UniversalMovieList movieList={movies} />;
      {movies.length > 0 && <LoadMoreBtn setPage={setPage} />}
    </>
  );
}

export default UpcomingMoviesPage;
