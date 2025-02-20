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
          <ul>
            <li>
              <h2>{movieDetails.title}</h2>
              <p>{movieDetails.overview}</p>
            </li>
            <li>
              <p> User score/popularit: {movieDetails.popularity}</p>
            </li>
          </ul>
          <ul>
            <li className="">
              Geners:
              {movieDetails.genres.map(genres => (
                <p key={genres.id}>{genres.name}</p>
              ))}
            </li>
          </ul>

          <div className="">
            <p>Additional information:</p>
            <Link to="cast" className="card-link">
              Cast
            </Link>
            <Link to="reviews" className="card-link">
              Reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDeatilsCard;
