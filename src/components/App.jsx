import { lazy, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import css from './App.module.css';
import NowPlayingPage from 'pages/NowPlayingPage';
import UpcomingMoviesPage from 'pages/UpcomingMoviesPage';

import TestPage from 'pages/TestPage';

const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Popular = lazy(() => import('../pages/Popular'));
const Watchlist = lazy(() => import('../pages/WatchList'));

const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(0, 98, 255);
  }
`;

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = e => {
    if (e.target.tagName === 'A') {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={`${css.nav} ${isMenuOpen ? css.open : ''}`}>
          <ul className={css.nav_list} onClick={handleMenuClose}>
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
            <li className={css.nav_list_item}>
              <StyledLink to="/testpage" className={css.navLink}>
                TestPage
              </StyledLink>
            </li>
          </ul>
        </nav>
        <div
          className={`${css.burger} ${isMenuOpen ? css.active : ''}`}
          onClick={() => {
            setIsMenuOpen(prevState => !prevState);
          }}
        ></div>
      </header>

      <Routes>
        <Route path="popular" element={<Popular />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="nowplaying" element={<NowPlayingPage />} />
        <Route path="upcoming" element={<UpcomingMoviesPage />} />
        <Route path="testpage" element={<TestPage />} />
        <Route path=":category/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};
