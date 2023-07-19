import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Button, Container, Typography } from '@mui/material'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, voidCart, total, totalCount} = useContext(CartContext);

    if(totalCount === 0) {
        return(
          <div>
            <Typography gutterBottom variant="h2" component="div">
                Cart is void
            </Typography>
            <Button component={Link} to='/'>Go to pick some products </Button>
          </div>
        )

    
    }

  return (
    <Container sx={{margin:"auto"}}>
        {cart.map(product => <CartItem key={product.id} {...product} /> )}
        <Typography gutterBottom variant="h3" component="div">
          Total:  ${total}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          Total cuantity: {totalCount}
        </Typography>
        <Button onClick={() => voidCart() } > Void Cart </Button>
        
        <Button component={Link} to="/checkout" > Finish your shop </Button>


    </Container>
  )
}

export default Cart