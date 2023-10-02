import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import Formulario from "../Formulario/Formulario"

//estilos
import './cartConteiner.css'

const CartConteiner = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarItem, id } = useCartContext()

  return (
    <>

      {/* {id !== '' && <h3> Su orden de compra es {id}</h3>} */}
      {cartList.length > 0 ?

        <div className="conteiner-cart">
          <div className="carrito">
            <img className="carrito-img" src="/public/assets/nike-icono.svg" alt="" />
            <p className="titulo-carrito">Carrito</p>
          </div>
          {cartList.map(prod => <div className="cart-product" key={prod.id}>
            <img src={prod.img} className="w-25" />
            <div className="cart-detail-product">
              <p>
                {prod.name}
              </p>
              <p>
                SubTotal ${prod.price}
              </p>
              <p>
                Cantidad: {prod.quantity}
              </p>
            </div>
            <button className="button-eliminar" onClick={() => eliminarItem(prod.id)}>X</button>
          </div>)}
          {precioTotal() !== 0 && <p className="precio-total">Precio total = $ {precioTotal()}</p>}
          <div className="buttons">
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
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