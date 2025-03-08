import noImage from '../../img/depositphotos_134263580-stock-photo-man-holding-card-with-question.jpg';
import css from './UniversalMoviesList.module.css';

import { Link, useLocation } from 'react-router-dom';

function UniversalMovieList({ movieList, setPage }) {
  const location = useLocation();

  return (
    <main>
      <ul className={css.movies_list}>
        {movieList.map((movie, index) => (
          <li key={index} className={css.movies_list_item}>
            <Link
              className={css.movie_list_item_link}
              to={`${movie.id}`}
              state={{ from: location }}
            >
              <img
                className={css.movies_list_item_img}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : noImage
                }
                alt="pic"
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

export default UniversalMovieList;
