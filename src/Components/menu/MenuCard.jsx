
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material"; 


function MenuCard({ name, description, image }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px", boxShadow: 3 }}>
     
      <CardMedia component="img" height="140" image={image} alt={name} />

      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {name}
        </Typography>

        
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        
        <Button size="small" variant="contained" color="primary">
          Add To Cart
        </Button>
        <Button size="small" variant="outlined">
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default MenuCard;
