import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from '../Counter/Counter';
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';
import { Button } from '@mui/material';

export default function CardDetail( { name, id, img, description, stock, price } ) {

  const [addQuantity, setAddCuantity] = useState(0);
  const {addProduct} = useContext(CartContext);



CardDetail.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

    const handleQuantity = (quantity) => {
      setAddCuantity(quantity);
    const item = {id, name, price, img};
    addProduct(item, quantity)
}

  return (
    <Card sx={{  
                width: "40vh",
                heigth: "4rem",
                marginRight: '20px',
                marginLeft: '20px',
                marginBot: '10vh',
                marginTop: '10vh',
                backgroundColor:"#E1E5E6", 
                border: "3px solid #3F7D92", 
                borderRadius:"20px",
                transition:'transform 0.3s ease-in-out',

              }}>
      <CardMedia
        sx={{ height: "15rem" }}
        image={img}
        src={img}
        alt={name}
      />
      <CardContent sx={{display:"flex", flexDirection:"column"}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
         <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
          
          {
              addQuantity > 0 ?
           (<div><Button variant="contained" component={Link} to="/cart"> finish your shop</Button> <Button variant="contained" component={Link} to="/"> Pick more products</Button></div>)
           :
           (<Counter stock={stock} initial={1} addFunction={handleQuantity} ></Counter>)
          }   
      </CardActions>
    </Card>
  );
} 