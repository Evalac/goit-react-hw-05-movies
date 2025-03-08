import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';

function Watchlist() {
  const moviesIdarr = JSON.parse(localStorage.getItem('watchlist'));

  return <UniversalMovieList movieList={moviesIdarr} />;
}

export default Watchlist;
