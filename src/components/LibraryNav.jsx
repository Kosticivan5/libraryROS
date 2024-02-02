import { NavLink } from "react-router-dom";

const LibraryNav = () => {
  return (
    <nav className="library-nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to={`/`}
      >
        Правила пользования
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/registration"
      >
        Регистрация
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/q&a"
      >
        FAQ
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/popular"
      >
        Что нынче читают?
      </NavLink>
    </nav>
  );
};

export default LibraryNav;
