import { Link, NavLink, Outlet } from 'react-router-dom';

function Layout(params) {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main>
        <p>тут інший контент</p>
      </main>
    </div>
  );
}

export default Layout;
