import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import { Footer } from './components/Footer/Footer';

// Componentes

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import CartConteiner from './components/CartConteiner/CartConteiner';
import Inicio from './components/Inicio/Inicio';

//Estilos

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleCompra from './components/DetalleCompra/DetalleCompra';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer/>} />
          <Route path='/detalle/:pid' element={<ItemDetailConteiner/>} />
          <Route path='/cart' element={<CartConteiner />} />
          <Route path='/detalleCompra' element={<DetalleCompra/>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter >
  )
}

export default App