import { useState } from "react"
import { useCartContext } from "../../../Context/CartContext"
import ItemCount from "../../Counter/itemCount"
import { Link } from "react-router-dom"
//Estilo
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const [isCounter, setIsCounter] = useState(true)

    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        addProduct({ ...product, quantity })
        setIsCounter(false)
    }

    return (
        <div className="conteiner-detail">

            <div className="detail">

                <div className="detail-img">
                    <img className="w-75" src={product.img} alt="imagen producto" />
                </div>

                <div className="conteiner-detalle">

                    <h1 className="producto-nombre"> {product.name} </h1>
                    <p className="producto-precio"> ${product.price} </p>

                    <div className="conteiner-tabla-talle">
                        <div>
                            <p className="titutlo-talle">Tabla de talles</p>
                        </div>
                        <div className="conteiner-talla">
                            <div className="talle-linea">
                                <div className="talla">
                                    <span>7</span>
                                </div>
                                <div className="talla">
                                    <span>7.5</span>
                                </div>
                                <div className="talla">
                                    <span>8</span>
                                </div>
                                <div className="talla">
                                    <span>8.5</span>
                                </div>
                            </div>

                            <div className="talle-linea">
                                <div className="talla">
                                    <span>9</span>
                                </div>
                                <div className="talla">
                                    <span>9.5</span>
                                </div>
                                <div className="talla">
                                    <span>10</span>
                                </div>
                                <div className="talla">
                                    <span>10.5</span>
                                </div>
                            </div>

                            <div className="talle-linea">
                                <div className="talla">
                                    <span>11</span>
                                </div>
                                <div className="talla">
                                    <span>11.5</span>
                                </div>
                                <div className="talla">
                                    <span>12</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        {
                            isCounter ?

                                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />

                            :
                            
                                <div className="conteiner-button">

                                    <Link to={'/cart'}>
                                        <button className="ver-carrito"> Ver Carrito</button>
                                    </Link>
                                    <Link to={'/'}>
                                        <button className="volver-inicio">Volver al Inicio</button>
                                    </Link>
                                </div>
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ItemDetail