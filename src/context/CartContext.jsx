import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalCount: 0
})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    console.log(cart);

    const addProduct = (item, quantity) => {
        const existingProduct = cart.find((prod) => prod.item.id === item.id);

        if(!existingProduct) {
            setCart(prev => [...prev,{ item, quantity}]);
            setTotalCount(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        } else {
            const actualCart = cart.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, quantity: prod.quantity + quantity};
                } else {
                    return prod;
                }
            });
            setCart(actualCart);
            setTotalCount(prev => prev + quantity);
            setTotal(prev => prev +(item.price * quantity));
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find( prod => prod.item.id === id);
        const actualCart = cart.filter(prod => prod.item.id !== id); 
        setCart(actualCart);
        setTotalCount(prev => prev - deletedProduct.quantity);
        setTotal(prev => prev - (deletedProduct.item.price * deletedProduct.quantity));
    }

    const cleanCart = () => {
        setCart([]);
        setTotalCount(0);
        setTotal(0);
    }


    return (
        <CartContext.Provider value={{cart, total, totalCount, addProduct, deleteProduct, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}