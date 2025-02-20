function MovieDeatilsCard({ movieDetails }) {
  return (
    <section>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt="poster"
        />
      </div>

      <ul>
        <li>
          <p>{movieDetails.title}</p>
        </li>
        <li>
          <p>User score/popularit: {movieDetails.popularity}</p>
        </li>
        <li>
          <p>Overview</p>
          <p>{movieDetails.overview}</p>
        </li>
        <li>
          Geners:
          {movieDetails.genres.map(genres => (
            <p key={genres.id}>{genres.name}</p>
          ))}
        </li>
      </ul>
    </section>
  );
}

export default MovieDeatilsCard;
