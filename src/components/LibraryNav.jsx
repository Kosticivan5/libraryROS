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
        Правила пользования библиотекой
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/registration"
      >
        Регистрация <br /> в библиотеке
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/q&a"
      >
        Часто задаваемые вопросы
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/popular"
      >
        Топ-10 читаемых книг
      </NavLink>
    </nav>
  );
};

export default LibraryNav;
