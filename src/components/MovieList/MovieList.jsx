import { Link, useLocation } from 'react-router-dom';

function MovieList({ movieList }) {
  const loacation = useLocation();

  return (
    <main>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: loacation }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MovieList;
