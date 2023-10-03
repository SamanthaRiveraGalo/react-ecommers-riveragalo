import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

//Estilos
import './Inicio.css'

const Inicio = () => {
    return (
        <div>
            <div className='conteiner-banner'>
                <img className='banner' src='https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/34ccdcbe-4dbc-4549-a6ce-07bfd17d4198___8ebafb58010617f6880bdd778662653b.jpg' alt="banner img" />
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    )
}

export default Inicio