import React from "react";
import { useSelector } from "react-redux";

// styles
import useStyles from "./styles.js";

// components
import Post from "./Post/Post.js";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);
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
