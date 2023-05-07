import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box>
        <AppBar style={{ backgroundColor: "#4267B2" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }} align="left">
              MUI
            </Typography>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="/employee_form"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit" variant>
                Form
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
