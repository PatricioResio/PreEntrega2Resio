import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import{ useParams } from 'react-router-dom'
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from "../../service/firebase"

const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const { idCategory } = useParams();

useEffect(() => {
    const funcionProducts = idCategory ? query(collection(db, "products"), where("category", "==", idCategory)) : collection(db, "products");

    getDocs(funcionProducts)
        .then(respuesta => {
            setProducts(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        //Creo un nuevo array que contenga los datos del producto y además el id.        .then(res => setProducts(res))
        .catch(error => console.log(error))
}, [idCategory])


  return (
    <>
    <ItemList xs={4} sx={{ display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap:"10px" }} products={products} />
    </>
  )
}

export default ItemListContainer