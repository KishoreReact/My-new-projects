import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="nav-link">Home</Link>
          {/* <Link to="/projects" className="nav-link">Projects</Link> */}
          <Link to="/editor" className="nav-link">Editor</Link>
        </Typography>
        <IconButton edge="end" color="inherit">
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
