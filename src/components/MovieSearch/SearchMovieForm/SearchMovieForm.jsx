import css from './SearchMovieForm.module.css';

function SearchMovieForm({
  searchParams,
  fetchSearchMovie,
  setMovies,
  setSearchParams,
}) {
  const submitForm = e => {
    e.preventDefault();
    if (searchParams.get('query') === '') {
      alert('Please enter movie name');
    }
    console.log(searchParams.get('query'));
    fetchSearchMovie()
      .then(movie => {
        setMovies(movie);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form className={css.form_query} onSubmit={submitForm}>
        <label htmlFor="query" className={css.search_query_label}>
          <input
            className={css.search_query_input}
            value={searchParams.get('query') ?? ''}
            onChange={e => {
              setSearchParams({ query: e.target.value });
            }}
            type="text"
            name="query"
            id="query"
          />
        </label>
        <button className={css.search_query_button} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchMovieForm;
