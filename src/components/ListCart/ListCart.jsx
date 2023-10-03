import React from 'react'
import { useCartContext } from '../../Context/CartContext'

export const ListCart = () => {

    const {cartList, eliminarItem} = useCartContext()

  return (
    <div>
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
    </div>
  )
}
