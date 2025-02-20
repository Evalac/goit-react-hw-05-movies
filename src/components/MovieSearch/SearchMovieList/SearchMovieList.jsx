import { Link } from 'react-router-dom';

function SearchMovieList({ loacation, movies }) {
  return (
    <main>
      <ul>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: loacation }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default SearchMovieList;
