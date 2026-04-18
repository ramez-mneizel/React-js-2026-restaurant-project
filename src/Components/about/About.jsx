
import "./About.css";
import { Container, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Typography variant="h2" align="center" fontWeight="bold" gutterBottom>
          About our Medical Center
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          ​"Your health is our top priority. We are here to provide the care you
          deserve, every step of the way."
        </Typography>
      </Container>
    </>
  );
}


export default About;