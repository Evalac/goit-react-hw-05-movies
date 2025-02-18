import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function Movies(params) {
  const [movies, setMovies] = useState({ results: [] });
  const [searchParams, setSearchParams] = useSearchParams('');
  const queryValue = searchParams.get('query');
  console.log(queryValue);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c',
    },
  };

  async function fetchSearchMovie() {
    try {
      console.log(`Виконується фетч пошуку фільму`);
      const responce = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${queryValue}`,
        options
      );
      const data = responce.json();
      return data;
    } catch (error) {
      throw new Error('Упс щось пішло не так');
    }
  }

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(searchParams.get('query'));
          setSearchParams({ query: '' });
          fetchSearchMovie()
            .then(movie => {
              console.log(movie);
              setMovies(movie);
            })
            .catch(error => console.log(error));
        }}
      >
        <label htmlFor="query">
          <input
            value={searchParams.get('query')}
            onChange={e => {
              setSearchParams({ query: e.target.value });
            }}
            type="text"
            name="query"
            id="query"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <main>
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Movies;
