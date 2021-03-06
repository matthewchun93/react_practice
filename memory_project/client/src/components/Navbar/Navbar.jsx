import React from 'react';
import { Link } from 'react-router-dom';

// images
import memories from "../../images/memories.png";

// styles
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
  <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
      <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img
        className={classes.image}
        src={memories}
        alt="memories"
        height="60"
      />
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
        )}
      </Toolbar>
    </div>
  </AppBar>
  )
}

export default Navbar