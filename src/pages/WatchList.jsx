import WatchListItem from 'components/WatchList/WatchListItems';
import { useLocation } from 'react-router-dom';

function Watchlist() {
  const moviesIdarr = JSON.parse(localStorage.getItem('watchlist'));
  const location = useLocation();
  console.log(location);

  return <WatchListItem moviesIdarr={moviesIdarr} />;
}

export default Watchlist;
