import React, { useContext } from "react";

// store
import FavoritesContext from "../store/favorites-context";

// components
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
