/* import { useState, useContext } from 'react'
import { collection, addDoc, updateDoc, getDoc, doc} from "firebase/firestore";
import { db } from "../../service/firebase"
import { TextField } from "@mui/material/TextField"
import { Button } from '@mui/material';

const Checkout = () => {
    const {cart, voidCart, total } = useContext(cartContext);
    const [email, setEmail] = useState();
    const [confirmEmail, setConfirmEmail] = useState();
    const [error, setError] = useState();
    const [order, setOrder] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [lastName, setLastName] = useState();

    const handlerForm = (e) => {
        e.preventDefault();
        if(!name || !lastName || !email || !phone || !confirmEmail)
        setError("please complete all fields");
        return;
    };
    /* {
        if (email != confirmEmail)
        setError("error al confirmar email")
        return;
    } */

/*
    const order = 
    Promise.all (
        order.items.map(async (productOrder)=> {
        const productRef = doc(db, "products", productOrder.id)
        const productDoc = await getDoc(productRef);
        const stockActual = productDoc.data().stock;

        await updateDoc(productRef, {
        stock: stockActual - productOrder.cuantity
    })
        })
        /*    addDoc(collection(db, "orders"), order)
    .then(docRef => {
        setOrder(docRef.id);
        voidCart();
    });
 */
  /*
    .then(() => {
        addDoc(collection(db, "orders"), order)
        .then((docRef)=> {
            setOrderId(docRef.id);
            voidCart();
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
    )

  return (
    <div>
        <form onSubmit={handlerForm}>
            <h2>mi carrito</h2>
            {cart.map(prod => (
                <div key={order}>
                    <form>
                    <TextField id="outlined-basic" label="name" variant="outlined" />
                    <TextField id="outlined-basic" label="lastName" variant="outlined" />
                    <TextField id="outlined-basic" label="phone" variant="outlined" />
                    <TextField id="outlined-basic" label="email" variant="outlined" />
                    
                    <TextField id="outlined-basic" label="emailConfirm" variant="outlined" />
                    <Button variant="contained">Send order</Button> : <Button disabled>Complete form</Button>
                    </form>
                </div>
            ))

            }
        </form>
    </div>
  )
}

export default Checkout */