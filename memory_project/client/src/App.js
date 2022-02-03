import React from "react";

// material UI components
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// images
import memories from './images/memories.png'

// components
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

function App() {
  return (
    <Container maxwidth='lg'>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between"  alignItems="stretch" spacing={3}>
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
