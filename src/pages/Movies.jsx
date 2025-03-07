import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import * as API from '../services/ApiFetchServise';

import { options, BASE_URL } from 'services/OptionsAPI';

import SearchMovieForm from 'components/MovieSearch/SearchMovieForm/SearchMovieForm';
import SearchMovieList from 'components/MovieSearch/SearchMovieList/SearchMovieList';
import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const queryValue = searchParams.get('query') ?? '';

  const location = useLocation();

  // API.FetchMovies(`search/movie?query=${queryValue}`, 1).then().catch();

  async function fetchSearchMovie() {
    try {
      console.log(`Виконується фетч пошуку фільму`);
      const responce = await fetch(
        `${BASE_URL}/search/movie?query=${queryValue}`,
        options
      );
      const data = await responce.json();
      return data;
    } catch (error) {
      throw new Error('Упс щось пішло не так');
    }
  }

  return (
    <>
      <SearchMovieForm
        searchParams={searchParams}
        fetchSearchMovie={fetchSearchMovie}
        setMovies={setMovies}
        setSearchParams={setSearchParams}
      />

      {/* <SearchMovieList location={location} movies={movies} /> */}
      <UniversalMovieList movieList={movies} />
    </>
  );
}

export default Movies;
