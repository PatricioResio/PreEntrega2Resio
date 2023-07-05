import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';


const ItemDetailContainer = () => {
    const [product, setProduct]  = useState(null);
    const { idItem } = useParams();

useEffect (() => {
    getProduct(idItem)
    .then(res => setProduct(res))
    .catch(err => console.log(err))
}, [idItem])

    return (
    <Container sx={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
        <ItemDetail  {...product} />
    </Container>
  )
}

export default ItemDetailContainer