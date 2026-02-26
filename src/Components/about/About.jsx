
import "./About.css";
import { Container, Typography } from "@mui/material";

function About() {
    return (
        <>
    
            <Container sx={
    {py: 10}
        }>

   <Typography variant="h1" align="center" fontWeight="bold">
                    choose & create picante </Typography>
     <Typography variant="h6" align="center" color="text.secondary"> comes with a different demos</Typography>
        
</Container>
        </>

    );
}

export default About;