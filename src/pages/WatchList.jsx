import UniversalMovieList from 'components/UniversalMoviesList/UniversalMoviesList';
import { useLocation } from 'react-router-dom';

function Watchlist() {
  const moviesIdarr = JSON.parse(localStorage.getItem('watchlist')); // eslint-disable-next-line
  const location = useLocation();

  return <UniversalMovieList movieList={moviesIdarr} />;
}

export default Watchlist;
