import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    return navigate("/auth?mode=login");
  };
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Planner</div>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li>
            <NavLink
              to="/todos"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/diets"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Diets
            </NavLink>
          </li>
          <li>
            {isLoggedIn ? (
              <button className={classes.logout} onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
