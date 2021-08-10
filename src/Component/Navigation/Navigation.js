import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink
          exact
          to="/"
          className={s.Navigation}
          activeClassName={s.NavigationActive}
        >
          Home
        </NavLink>
        <NavLink
          to="/films"
          className={s.Navigation}
          activeClassName={s.NavigationActive}
        >
          Films
        </NavLink>
      </nav>
      <hr />
    </>
  );
};

export default Navigation;
