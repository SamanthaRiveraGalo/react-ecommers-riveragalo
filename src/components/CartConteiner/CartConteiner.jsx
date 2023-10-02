import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import Formulario from "../Formulario/Formulario"

const CartConteiner = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarItem, id } = useCartContext()

  return (
    <>

      {id !== '' && <h3> Su orden de compra es {id}</h3>}
      {cartList.length > 0 ?

        <div>
          {cartList.map(prod => <div key={prod.id}>
            <img src={prod.img} className="w-25" />
            {prod.name} - ${prod.price} - {prod.quantity}
            <button onClick={() => eliminarItem(prod.id)}>X</button>
          </div>)}
          {precioTotal() !== 0 && <p>Precio total = $ {precioTotal()}</p>}
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button>Continua Compra</button>

          <Formulario/>

        </div>

        :

        <div>
          <Link to='/'>Volver al inicio</Link>
          <h3> Su carrito esta vacio, por favor ingrese productos</h3>
        </div>}
    </>

  )
}

export default CartConteiner