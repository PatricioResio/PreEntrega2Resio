import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Button, Container, Typography } from '@mui/material'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, cleanCart, total, totalCount} = useContext(CartContext);

    if(totalCount === 0) {
        return(
          <Container sx={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:"20vh"}}>
            <Typography gutterBottom variant="h2">
                Cart is void
            </Typography>
            <Button component={Link} to='/'>Go to pick some products </Button>
          </Container>
        )

    }

  return (
    <Container sx={{margin:"auto"}}>
      <Container sx={{display:'flex', flexDirection:'row'}}>
        {cart.map(product => <CartItem key={product.id} product={product} /> )}
      </Container>
        <Typography gutterBottom variant="h3" component="div">
          Total:  ${total}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          Total quantity: {totalCount}
        </Typography>
        <Button variant="contained" onClick={() => cleanCart() } > Clean cart </Button>
        
        <Button variant="contained" component={Link} to="/checkout" > Finish your buy </Button>


    </Container>
  )
}

export default Cart