import { useCartContext } from '../../../Context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()
  return (
    <div>
      <img src="/public/assets/shopping-bag.svg" alt="shopping bag" />
      <span className='cart-span'>
        {cantidadTotal()}
      </span>
    </div>
  )
}

export default CartWidget