import { Route, Routes, NavLink } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/Home';

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
        <Route
          path="/movies"
          element={<div>Тут список фільмів ТАКОЖ ОКЕРМА СТОРІНКА </div>}
        />
      </Routes>
    </div>
  );
};
