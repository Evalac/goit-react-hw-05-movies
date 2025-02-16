import { Route, Routes, NavLink } from 'react-router-dom';

import Home from 'pages/Home';
import MoviesDetails from 'pages/MoviesDetails';

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
        <Route path="/movies" element={<p>тут буде список фільмів</p>} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route
            path="/movies/:movieId/cast"
            element={<p>тут інфа про акторів</p>}
          />
          <Route
            path="/movies/:movieId/reviews"
            element={<p>Тут буде reviwes</p>}
          />
        </Route>
      </Routes>
    </div>
  );
};
