function SearchMovieForm({
  searchParams,
  fetchSearchMovie,
  setMovies,
  setSearchParams,
}) {
  const submitForm = e => {
    e.preventDefault();
    console.log(searchParams.get('query'));
    fetchSearchMovie()
      .then(movie => {
        setMovies(movie);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="query">
          <input
            value={searchParams.get('query') ?? ''}
            onChange={e => {
              setSearchParams({ query: e.target.value });
            }}
            type="text"
            name="query"
            id="query"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchMovieForm;
