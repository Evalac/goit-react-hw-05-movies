import { Link } from 'react-router-dom';

import css from './MovieDetailsCard.module.css';
import { useState, useEffect } from 'react';

function MovieDeatilsCard({ movieDetails }) {
  let moviesArr = [];
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem('watchlist')) ?? []
  );
  const findMovie = watchlist.some(movie => movie.id === movieDetails.id);

  const setWatchList = () => {
    if (findMovie) {
      alert('Такий фільм вже є в списку');
      return;
    }

    moviesArr.push(movieDetails);
    setWatchlist(prevState => [...prevState, ...moviesArr]);
  };

  useEffect(() => {
    // Зберігаємо watchlist у localStorage при кожній зміні

    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <section className={css.movie_deatils_card}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            className={css.img_poster}
            alt="..."
          />
        </div>

        <div className={css.card_content_items}>
          <ul className={css.card_list}>
            <li className={css.card_list_item}>
              <h2 className={css.title}>{movieDetails.title}</h2>
              <p>{movieDetails.overview}</p>
            </li>
            <li>
              <p> Release: {movieDetails.release_date}</p>
            </li>
            <li>
              <p> User score: {movieDetails.vote_average}</p>
            </li>
            <li>Runtime: {movieDetails.runtime} min</li>
          </ul>

          <ul className={css.card_geners_list}>
            <li className={css.card_geners_list_item}>
              <p>
                Genres:{' '}
                {movieDetails.genres.map(genre => genre.name).join(', ')}.
              </p>
            </li>
          </ul>

          <div className={css.additional_info_block}>
            <p>Additional information:</p>
            <Link to="cast" className={css.card_link}>
              Cast
            </Link>
            <Link to="reviews" className={css.card_link}>
              Reviews
            </Link>
            <button onClick={setWatchList} disabled={findMovie}>
              Add to watchlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDeatilsCard;
