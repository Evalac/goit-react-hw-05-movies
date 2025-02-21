import css from './CastCard.module.css';
import noImage from '../../../img/depositphotos_134263580-stock-photo-man-holding-card-with-question.jpg';

function CastCard({ casts }) {
  return (
    <ul className={css.castList}>
      {casts.cast.map((cast, index) => (
        <li key={cast.id} className={css.cast_List_Item}>
          <img
            className={css.cast_List_Item_Img}
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                : noImage
            }
            alt="pic"
          />
          <div className="">
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CastCard;
