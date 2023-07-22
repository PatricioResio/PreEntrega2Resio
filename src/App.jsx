import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"


import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:idCategory' element={ <ItemListContainer/> }/>
          <Route path='/products' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/checkout' element={ <Checkout/> }/> 
        </Routes>
        </CartProvider>

    </>
  )
}

export default App
