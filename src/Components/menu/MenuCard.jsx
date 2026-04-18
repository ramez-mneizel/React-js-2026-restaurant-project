import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function MenuCard({
  name,
  descriptioon,
  image,
  price,
  
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(initialQuantity || 1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleView = () => {
    navigate("/view-details", {
      state: { name, descriptioon, image, price, quantity: count },
    });
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: "15px", boxShadow: 3 }}>
        <CardMedia component="img" image={image} height="140" alt={name} />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {descriptioon}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Add To Cart
          </Button>
          <Button size="small" onClick={handleView}>
            View
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 4,
            borderRadius: "20px",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" align="center">
            {name} added to cart!
          </Typography>

          {/* عرض السعر والكمية */}
          <Typography align="center" sx={{ mt: 2 }}>
            <Button
              onClick={decrease}
              variant="outlined"
              sx={{ minWidth: "40px", mr: 2 }}
            >
              -
            </Button>
        
            <Button
              onClick={increase}
              variant="outlined"
              sx={{ minWidth: "40px", ml: 2 }}
            >
              +
            </Button>
          </Typography>

          <Typography align="center" sx={{ mt: 2 }}>
            Total Price: {price * count}$
          </Typography>

          <Button
            fullWidth
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 3 }}
          >
            Done!
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default MenuCard;

