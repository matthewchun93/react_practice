import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// material UI components
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// images
import memories from "./images/memories.png";

// styles
import useStyles from "./styles.js";

// actions
import { getPosts } from "./actions/posts";

// components
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;