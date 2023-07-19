import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { db } from "../../service/firebase";/* 
import PropTypes from 'prop-types'; */
import { getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct]  = useState(null); 
    const { idItem } = useParams();
/* 
    ItemDetailContainer.propTypes = {
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    };
 */

  useEffect (  ()=> {

    const fetchData = async () => {

      try {
        const docRef = doc(db, 'products', idItem)
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          setProduct(data);
        } else {
          console.log("El documento no existe");
        }
      } catch (error) {
        console.log("Error al recibir products:", error);
      }

    }
  fetchData();
}, [idItem])

    return (
    <Container sx={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
        <ItemDetail  {...product} />
    </Container>
  )
}

export default ItemDetailContainer