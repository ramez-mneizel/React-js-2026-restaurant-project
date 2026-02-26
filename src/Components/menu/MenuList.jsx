
import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import MenuCard from "./MenuCard.jsx";


function MenuList() {
    const pizzaMenu = [
    
        {
            id: 1,
            name: "Margherita",
            description: "Classic pizza with fresh tomato sauce, mozzarella cheese, and basil."
        },
        {
            id: 2,
            name: "Pepperoni",
            description: "Tomato sauce, mozzarella cheese, and generous slices of pepperoni.",
        },
        {
            id: 3,
            name: "BBQ Chicken",
            description: "Grilled chicken, BBQ sauce, red onions, and mozzarella cheese.",
        },
        {
            id: 4,
            name: "Hawaiian",
            description: "Tomato sauce, mozzarella cheese, ham, and pineapple chunks.",
        },
                
    ];
        
    return (
        <>
            <Container sx={{ py: 6 }}>
                <Typography variant="h4" align="center" fontWeight="bold">
                    Our Menu
                </Typography>
                <Grid container spacing={4}>
                    {pizzaMenu.map((pizza) => (
                        <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                            <MenuCard
                                name={pizza.name}
                                description={pizza.description}
                            />
                        </Grid>
                       
          
                    ))};
                </Grid>  
            </Container>
        </>

  );
};

export default MenuList;