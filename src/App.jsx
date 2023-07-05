import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>

        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:idCategory' element={ <ItemListContainer/> }/>
          <Route path='/products' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ "" }/>
          <Route path='/i' element={ "" }/>
        </Routes>


    </>
  )
}

export default App
