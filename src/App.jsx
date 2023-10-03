import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import { Footer } from './components/Footer/Footer';

// Componentes

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import CartConteiner from './components/CartConteiner/CartConteiner';
import DetalleCompra from './components/DetalleCompra/DetalleCompra';

//Estilos
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/Inicio/Inicio';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/category/:cid' element={<ItemListContainer/>} />
          <Route path='/detalle/:pid' element={<ItemDetailConteiner/>} />
          <Route path='/cart' element={<CartConteiner />} />
          <Route path='/detalleCompra/:id' element={<DetalleCompra/>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter >
  )
}

export default App