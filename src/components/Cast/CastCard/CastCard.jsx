import css from './CastCard.module.css';

function CastCard({ casts }) {
  return (
    <ul className={css.castList}>
      {casts.cast.map((cast, index) => (
        <li key={cast.id} className={css.cast_List_Item}>
          <img
            className={css.cast_List_Item_Img}
            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
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
