import { useState } from 'react'
// componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//estilos
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting='Hola!' titulo='Ecommerse - Rivera Galo'/>
    </>
  )
}

export default App