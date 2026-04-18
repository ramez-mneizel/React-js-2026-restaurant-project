import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../theme/Theme.jsx";
import { UserContext } from "../../Components/context/UserContext.jsx";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

function NavBar() {
  const { user } = useContext(UserContext);

  const role = user?.role;
  const currentrUsers = localStorage.getItem("currentrUsers");
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        color: "black",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ff9900",
              cursor: "pointer",
              letterSpacing: 1,
            }}
            onClick={() => navigate("/")}
          >
            Jalabeno Burger
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              color: "#000",
            }}
          >
            <Button
              onClick={() => navigate("/")}
              sx={{ color: "#ff9100", fontWeight: "bold" }}
            >
              {" "}
              Home
            </Button>

            <Button
              onClick={() => navigate("/")}
              sx={{ color: "#ff9100", fontWeight: "bold" }}
            >
              Gallery
            </Button>

            <Button
              onClick={() => navigate("/")}
              sx={{ color: "#ff9900", fontWeight: "bold" }}
            >
              Contact
            </Button>

            {role === "admin" ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/")}
                sx={{ color: "#ff9100", fontWeight: "bold" }}
              >
                Manage Menu
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/")}
                sx={{ color: "#ff9100", fontWeight: "bold" }}
              >
                Menu
              </Button>
            )}

            {currentrUsers ? (
              <Button
                variant="outlined"
                sx={{
                  borderColor: "white",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/")}
                  sx={{ color: "#ff9100", fontWeight: "bold" }}
                >
                  Register
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/")}
                  sx={{ color: "#faf8f7", fontWeight: "bold" }}
                >
                  Login
                </Button>
              </>
            )}

            <Theme />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
