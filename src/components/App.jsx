import { lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import css from './App.module.css';

const Home = lazy(() => import('../pages/Home'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <div className="container-sm">
      <nav className={css.header}>
        <NavLink to="/" className={css.navLink}>
          Trending movies on the week
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Search movie
        </NavLink>
        <NavLink to="" className={css.navLink}>
          Popular
        </NavLink>
        <NavLink to="" className={css.navLink}>
          Now Playing
        </NavLink>
        <NavLink to="" className={css.navLink}>
          Upcoming
        </NavLink>
        <NavLink to="" className={css.navLink}>
          Watchlist
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};
