import { useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import { UserContext } from "../../Context/UserContext"; 

function Register() {
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const { register } = useContext(UserContext);

  const handleRegister = () => {
    register(userData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        fullWidth
        required
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleRegister}
      >
        Register
      </Button>
    </Box>
  );
}

export default Register;
