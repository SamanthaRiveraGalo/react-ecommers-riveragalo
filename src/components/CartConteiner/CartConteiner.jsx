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
            <img className="carrito-img" src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" alt="" />
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