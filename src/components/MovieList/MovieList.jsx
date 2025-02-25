import css from './MoveList.module.css';

import { Link, useLocation } from 'react-router-dom';

function MovieList({ movieList }) {
  const loacation = useLocation();

  return (
    <main>
      <ul className={css.movies_list}>
        {movieList.map(movie => (
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

export default MovieList;
