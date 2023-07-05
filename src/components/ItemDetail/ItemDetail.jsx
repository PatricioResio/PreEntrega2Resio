import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from '../Counter/Counter';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CardDetail( { name, img, category, description, stock } ) {

  const [count, setAddCount] = useState();


CardDetail.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
};

  const handleCount = (count) => {
    setAddCount(count);
    console.log("Products to add: " + count);
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
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
         <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      { count  > 0 ? (<Link to="/cart"> finish your </Link>) : <Counter stock={stock} initial={1} add={handleCount} ></Counter>} 
      </CardActions>
    </Card>
  );
}