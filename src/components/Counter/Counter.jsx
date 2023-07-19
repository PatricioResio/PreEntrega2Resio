import { Button, Container, Typography } from '@mui/material';
import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Counter = ( {stock, initial, addFunction} ) => {
  const [quantity, setQuantity] = useState(initial);


  Counter.propTypes = {
    
      initial: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
  };


  useEffect(()=>{

  },[quantity])

  const plusCount = () =>{
    if (quantity < stock) {
        setQuantity(quantity + 1);
    }
  }
  
  const restCount = () =>{
    if (quantity > initial ) {
        setQuantity(quantity - 1);
    }
  }

    return (
    <>  
      <Container sx={{display: "flex", flexDirection:"column", alignItems: "center"}}>
        <Container sx={{display:"flex", alignItems:"center"}}> 
        <Button onClick={plusCount} variant="contained" icon={<FontAwesomeIcon icon="fa-solid fa-plus" />} sx={{display: 'inline-block', width:"2rem", height:"2rem"}}> + </Button>
        <Typography sx={{display: 'inline-block', margin: '10px' }}> {quantity} </Typography >
        <Button onClick={restCount} variant="contained" icon={<FontAwesomeIcon icon="fa-solid fa-minus" />}  sx={{display: 'inline-block', width:"2rem", height:"2rem"}}> - </Button>
         </Container> 
        <Button variant="contained" sx={{marginTop:"10px"}} onClick={addFunction}>Add to Cart</Button>
      </Container>
    </>

  )
}

export default Counter