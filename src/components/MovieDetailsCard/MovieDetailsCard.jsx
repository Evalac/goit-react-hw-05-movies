import { Link } from 'react-router-dom';

import css from './MovieDetailsCard.module.css';

function MovieDeatilsCard({ movieDetails }) {
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
              <p> User score/popularit: {movieDetails.popularity}</p>
            </li>
          </ul>

          <ul className={css.card_geners_list}>
            <li className={css.card_geners_list_item}>
              <strong>Genres:</strong>
              <p>{movieDetails.genres.map(genre => genre.name).join(', ')}.</p>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDeatilsCard;
