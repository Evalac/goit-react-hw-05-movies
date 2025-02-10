import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c',
    },
  };

  async function fetchMovies(params) {
    try {
      console.log('виконується фетч');

      const responce = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
      );
      const data = await responce.json();
      return data;
    } catch (error) {
      throw new Error('Вибаче щось пішло не так');
    }
  }

  useEffect(() => {
    fetchMovies()
      .then(data => setMovieList(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <NavLink>{movie.original_title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
