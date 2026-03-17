import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 1000 }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="/Loginimg/Logo.svg"
            className="mr-3 h-8 hidden md:inline"
            alt="Logo"
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit", mr: 2 }}
          >
            TEN Internships
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "auto" }}>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
