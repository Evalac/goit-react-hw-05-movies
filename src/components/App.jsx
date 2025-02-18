import { lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

// import Home from 'pages/Home';
// import MoviesDetails from 'pages/MoviesDetails';
// import Movies from 'pages/Movies';

// import Cast from './Cast/Cast';
// import Review from './Review/Review';

const Home = lazy(() => import('../pages/Home'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/movies">Movies</NavLink>
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
