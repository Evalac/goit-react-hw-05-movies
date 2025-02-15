import { Link } from 'react-router-dom';

function MovieList({ movieList }) {
  return (
    <main>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MovieList;
