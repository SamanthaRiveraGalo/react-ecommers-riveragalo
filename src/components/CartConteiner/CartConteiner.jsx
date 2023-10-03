import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { ListCart } from "../ListCart/ListCart"

import Formulario from "../Formulario/Formulario"

//estilos
import './cartConteiner.css'

const CartConteiner = () => {

  const { cartList, deleteCart, precioTotal } = useCartContext()

  return (
    <>

      {cartList.length > 0 ?

        <div className="conteiner-cart">
          <div className="carrito">
            <img className="carrito-img" src="/assets/nike-icono.svg" alt="" />
            <p className="titulo-carrito">Carrito</p>
          </div>
          <div>
            <ListCart />
          </div>
          {precioTotal() !== 0 && <p className="precio-total">Precio total = $ {precioTotal()}</p>}
          <div className="buttons">
            <button onClick={deleteCart}>Vaciar Carrito</button>
          </div>

          <Formulario />

        </div>

        :

        <div className="conteiner-carrito-vacio">
          <Link to='/'>
            <button className="button-volver">Volver al inicio</button>
          </Link>
          <h3 className="carrito-vacio"> Su carrito esta vacio, por favor ingrese productos!!</h3>
        </div>}
    </>

  )
}

export default CartConteiner