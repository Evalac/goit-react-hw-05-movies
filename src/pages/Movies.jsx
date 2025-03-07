import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import * as API from '../services/ApiFetchServise';

import { options, BASE_URL } from 'services/OptionsAPI';

import SearchMovieForm from 'components/MovieSearch/SearchMovieForm/SearchMovieForm';
import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [page, setPage] = useState(1);
  const queryValue = searchParams.get('query') ?? '';

  const location = useLocation();

  // API.FetchMovies(`search/movie?query=${queryValue}`, 1).then().catch();

  async function fetchSearchMovie() {
    try {
      console.log(`Виконується фетч пошуку фільму`);
      const responce = await fetch(
        `${BASE_URL}/search/movie?query=${queryValue}&page=${page}`,
        options
      );
      const data = await responce.json();
      return data;
    } catch (error) {
      throw new Error('Упс щось пішло не так');
    }
  }

  useEffect(() => {
    fetchSearchMovie()
      .then(movie => {
        if (page > 1) {
          setMovies(prevState => [...prevState, ...movie.results]);
          return;
        }
        setMovies(movie.results);
      })
      .catch(error => console.log(error));
  }, [page]);

  const onSubmit = e => {
    e.preventDefault();
    if (searchParams.get('query') === '') {
      alert('Please enter movie name');
    }
    fetchSearchMovie()
      .then(movie => {
        setMovies(movie.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <SearchMovieForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        submitForm={onSubmit}
      />

      {/* <SearchMovieList location={location} movies={movies} /> */}
      <UniversalMovieList movieList={movies} setPage={setPage} />
    </>
  );
}

export default Movies;
