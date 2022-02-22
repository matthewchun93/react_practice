import React from "react";

// styles
import classes from "./Search.module.scss";

const Search = (props) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          props.setPageNumber(1);
          props.setSearch(e.target.value);
        }}
        placeholder="Search character name"
        type="text"
        className={classes.input}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`${classes.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
