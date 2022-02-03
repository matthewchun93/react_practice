import React from "react";

// styles
import useStyles from "./styles.js";

// components
import Post from "./Post/Post.js";

const Posts = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
