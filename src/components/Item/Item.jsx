import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export default function CardProduct( { prod } ) {

   CardProduct.propTypes = {
    prod: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    }).isRequired,
  }; 

  return (
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
        image={prod.img}
        src={!prod ?  '' : prod.img}necesito
      />
      <CardContent sx={{display:"flex", flexDirection:"column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {prod.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prod.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/item/${prod.id}`}>See more</Button>
      </CardActions>
    </Card>
  );
}