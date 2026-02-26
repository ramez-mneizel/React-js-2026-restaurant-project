import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pizza House
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
