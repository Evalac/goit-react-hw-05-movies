import { lazy, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import css from './App.module.css';
import NowPlayingPage from 'pages/NowPlayingPage';
import UpcomingMoviesPage from 'pages/UpcomingMoviesPage';

const Home = lazy(() => import('../pages/Home'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Popular = lazy(() => import('../pages/Popular'));
const Watchlist = lazy(() => import('../pages/WatchList'));

const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const StyledLink = styled(NavLink)`
    &.active {
      color: rgb(0, 98, 255);
    }
  `;

  return (
    <div className={css.container}>
      <button className={css.burger} onClick={toggleMenu}>
        Menu
      </button>
      <nav className={`${css.header} ${menuOpen ? css.nav_open : ''}`}>
        <ul className={css.nav_list}>
          <li className={css.nav_list_item}>
            <StyledLink to="/" className={css.navLink}>
              Trending movies on the week
            </StyledLink>
          </li>
          <li className={css.nav_list_item}>
            <StyledLink to="/popular" className={css.navLink}>
              Popular
            </StyledLink>
          </li>
          <li className={css.nav_list_item}>
            <StyledLink to="/nowplaying" className={css.navLink}>
              Now Playing
            </StyledLink>
          </li>
          <li className={css.nav_list_item}>
            <StyledLink to="/upcoming" className={css.navLink}>
              Upcoming
            </StyledLink>
          </li>
          <li className={css.nav_list_item}>
            <StyledLink to="/movies" className={css.navLink}>
              Search movie
            </StyledLink>
          </li>
          <li className={css.nav_list_item}>
            <StyledLink to="/watchlist" className={css.navLink}>
              Watchlist
            </StyledLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="popular" element={<Popular />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="nowplaying" element={<NowPlayingPage />} />
        <Route path="upcoming" element={<UpcomingMoviesPage />} />
        <Route path=":category/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};
