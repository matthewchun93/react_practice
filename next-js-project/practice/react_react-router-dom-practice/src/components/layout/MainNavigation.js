import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import FavoritesContext from "../../store/favorites-context";

// styles
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const FavoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites{" "}
              <span className={classes.badge}>
                {FavoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
