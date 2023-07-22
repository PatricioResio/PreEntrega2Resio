import { useContext } from 'react';
import { CartContext } from "../../context/CartContext"
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function CartItem ({ product, quantity }) {
    const { deleteProduct } = useContext(CartContext);

    return (
    <Container>
         

         <Card sx={{  
                width: "30vh",
                heigth: "2rem",
                marginRight: '20px',
                marginLeft: '20px',
                marginBot: '60vh',
                backgroundColor:"#E1E5E6", 
                border: "3px solid #3F7D92", 
                borderRadius:"20px",
                transition:'transform 0.3s ease-in-out',

              }}>
      <CardMedia
        sx={{ height: "10rem" }}
        image={product.item.img}
        src={!product ?  '' : product.item.img}
      />
      <CardContent sx={{display:"flex", flexDirection:"column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ${product.item.price}
      </Typography>
        <Typography variant="body2" color="text.secondary">
          quantity {product.quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="danger" onClick={() => deleteProduct(product.item.id)}>Delete</Button>
      </CardActions>
    </Card>

    </Container>
  )
}