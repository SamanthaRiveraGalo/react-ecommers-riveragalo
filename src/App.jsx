import { BrowserRouter, Routes, Route } from 'react-router-dom'
// componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import CartConteiner from './components/CartConteiner/CartConteiner';
import Banner from './components/Banners/Banner';

//estilos
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:cid' element={<ItemListContainer />} />
        <Route path='/detalle/:pid' element={<ItemDetailConteiner />} />
        <Route path='/cart' element={<CartConteiner />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App