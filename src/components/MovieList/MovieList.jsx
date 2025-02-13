import { NavLink, Link } from 'react-router-dom';

function MovieList({ movieList }) {
  return (
    <div>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
