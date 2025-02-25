import { Link } from 'react-router-dom';
import css from './MoveList.module.css';

function SearchMovieList({ loacation, movies }) {
  return (
    <main>
      <ul className={css.movies_list}>
        {movies.results.map(movie => (
          <li key={movie.id} className={css.movies_list_item}>
            <Link
              className={css.movie_list_item_link}
              to={`movies/${movie.id}`}
              state={{ from: loacation }}
            >
              <img
                className={css.movies_list_item_img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <div className={css.movie_list_item_link_container}>
                <p className={css.movie_list_item_link_title}>{movie.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default SearchMovieList;
