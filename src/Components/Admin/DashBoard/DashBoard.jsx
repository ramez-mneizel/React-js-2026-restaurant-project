import { Box, Container } from "@mui/material";
import SideBar from "./SideBar.jsx";
import { useState } from "react";
import MenuList from "../../menu/MenuList.jsx";
import Navbar from "../../Navbar/NavBar.jsx";
function Dashboard() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Sidebar open={open} toggleSideBar={toggleSideBar} />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Navbar />
          <Container maxWidth="xl" sx={{ my: 4, flexFlow: 1 }}>
            <MenuList />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default DashBoard;
