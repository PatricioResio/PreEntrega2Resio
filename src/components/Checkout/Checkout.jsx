import { useState, useContext } from 'react';
import { collection, addDoc, updateDoc, getDoc, doc} from "firebase/firestore";
import { db } from "../../service/firebase";
import { Container, TextField } from "@mui/material";
import { Button } from '@mui/material';
import {CartContext} from '../../context/CartContext';

const Checkout = () => {
    const {cart, cleanCart, total } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handlerForm = (e) => {
        e.preventDefault();
        if(!name || !lastName || !email || !phone || !confirmEmail){
        setError("please complete all fields");
        return;
    }
     
        if (email != confirmEmail){
        setError("emails are diferents")
        return;
    } 


    const order = {
        items: cart.map(product =>  ({
            id: product.item.id,
            name:product.item.name,
            quantity:product.quantity
        })),
        total: total,
        name,
        lastName,
        phone,
        email,
        date: new Date()
    };

        Promise.all (
            order.items.map(async (productOrder)=> {
                const productRef = doc(db, "products", productOrder.id)
                const productDoc = await getDoc(productRef);
                const stockActual = productDoc.data().stock;
        
                await updateDoc(productRef, {
                    stock: stockActual - productOrder.cuantity
                    });
            })
        )

        .then(() => {
            addDoc(collection(db, "orders"), order)
                .then((docRef)=> {
                    setOrderId(docRef.id);
                    cleanCart();

                })
                .catch((err)=> {
                    console.log("error al crearla orden")
                    setError("error al crearla orden")
                })
            .catch((error)=> {
                console.log("Error al actualizar el stock")
                setError("error al actualizar stock")
            })
        })
    }

  return (
    <Container sx={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:"5vh"}}>
        <form onSubmit={handlerForm}>
            <h2>Checkout</h2>
            {cart.map(prod => (
                <Container sx={{display:"flex", flexDirection:"row", alignItems:"center"}} key={prod.id}>
                    <div key={prod.id}>
                    <p> {prod.item.name} x {prod.quantity}</p>
                    <p>Price ${prod.item.price}</p>
                    </div>
                </Container>
                ))

            }   
           
                <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", border:"solid, 5px"}}>
                    <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="name" variant="outlined" />
                    <TextField id="outlined-basic" value={lastName} onChange={(e) => setLastName(e.target.value)}  label="lastName" variant="outlined" />
                    <TextField id="outlined-basic" value={phone} onChange={(e) => setPhone(e.target.value)}  label="phone" variant="outlined" />
                    <TextField id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)}  label="email" variant="outlined" />
                    <TextField id="outlined-basic" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}  label="emailConfirm" variant="outlined" />
                    
                </Container>
        

        {
            error && <p style={{ color: "red" }}> {error} </p>
        }

                <Button type="submit"  variant="contained">Send order</Button> 
        </form>
            {
                orderId && (
                    <strong className="ordenId">¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
                )
            }

    </Container>
  )       
}
export default Checkout 