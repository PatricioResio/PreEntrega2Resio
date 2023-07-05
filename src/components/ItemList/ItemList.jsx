import Item from '../Item/Item'
import { Grid } from '@mui/material'

const itemList = ({products}) => {
  return (
    < >
    <Grid container sx={{margin:"30px "}} spacing={2}>
      {
        products.map(prod => 
       
        <Item sx={{}} xs={4} key={prod.id} prod={prod}/>
       
        )
      }
      </Grid>
    </>
    )
}

export default itemList