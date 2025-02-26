import { Link } from 'react-router-dom';
import WatchList from 'components/WatchList/WatchList';

function Watchlist(params) {
  const moviesIdarr = JSON.parse(localStorage.getItem('watchlist'));

  console.log(moviesIdarr);

  return <WatchList moviesIdarr={moviesIdarr} />;
}

export default Watchlist;
