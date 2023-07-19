import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalCount: 0
})

//3) Creamos un componente llamado "CarritoProvider". 
//También lo pueden encontrar como "proveedor de contextos". 

export const CartProvider = ({children}) => {
    //4) Creamos un estado local "carrito, total y cantidad total" con el hook useState.
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    //No se olviden de esto: verifiquen el carrito por consola. 
    console.log(cart);

    //5) Agregamos algunos métodos al proveedor de contexto para manipular el carrito de compras: 

    //Función agregar al carrito: 

    const addProduct = (item, quantity) => {
        const productExistent = cart.find(prod => prod.item.id === item.id);

        if(!productExistent) {
            setCart(prev => [...prev, {item, quantity}]);
            //La sintaxis: prev => [...prev, {item, quantity}] la uso para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto que representa el nuevo producto. 
            setTotalCount(prev => prev + quantity);
            setTotal(prev => prev + (item.precio * quantity));
        } else {
            const carritoActualizado = cart.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, quantity: prod.quantity + quantity};
                } else {
                    return prod;
                }
            });
            setCart(carritoActualizado);
            setTotalCount(prev => prev + quantity);
            setTotal(prev => prev +(item.precio * quantity));
        }
    }

    //Función para eliminar productos del carrito: 

    const deleteProduct = (id) => {
        const deletedProduct = cart.find( prod => prod.item.id === id);
        const actualCart = cart.filter(prod => prod.item.id !== id); 
        setCart(actualCart);
        setTotalCount(prev => prev - deletedProduct.quantity);
        setTotal(prev => prev - (deletedProduct.item.precio * deletedProduct.quantity));
    }

    //Función para vaciar el carrito de compras: 

    const voidCart = () => {
        setCart([]);
        setTotalCount(0);
        setTotal(0);
    }


    //6) Usamos el componente CarritoContext.Provider para enviar el valor actual del carrito y los métodos a los componentes de mi aplicación que lo necesiten. 

    return (
        <CartContext.Provider value={{cart, total, totalCount, addProduct, deleteProduct, voidCart}}>
            {children}
        </CartContext.Provider>
    )
}

//7) Children: propiedad especial que se utiliza para representar a todos aquellos componentes que pueden necesitar el carrito y sus métodos. 