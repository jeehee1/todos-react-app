import { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav);
  };
  console.log(showNav);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    return navigate("/auth?mode=login");
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logo} onClick={() => {return navigate('/')}}>Planner</div>
        <div className={classes["menu-icon"]} onClick={showNavHandler}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className={[
            classes["nav-elements"],
            showNav ? classes.active : null,
          ].join(" ")}
        >
          <ul>
            <li>
              <NavLink
                to="/schedule"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Schedule
              </NavLink>
            </li>
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
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
