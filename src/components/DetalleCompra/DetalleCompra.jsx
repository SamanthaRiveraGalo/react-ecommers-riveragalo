import React from 'react'
import { useParams } from 'react-router-dom'

//Estilo
import './DetalleCompra.css'

const DetalleCompra = () => {
  const {id}= useParams()
  return (
    <div className='conteiner-detalle'>
        <h1 className='compra-exitosa'>Su compra fue exitosa!</h1>
        {id !== '' && <h2 className='orden'> Su orden de compra es: {id}</h2>}
    </div>
  )
}

export default DetalleCompra