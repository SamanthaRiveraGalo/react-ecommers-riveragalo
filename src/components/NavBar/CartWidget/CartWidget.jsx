import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
        <img src="/public/assets/shopping-bag.svg" alt="" />
        <span className='cart-span'>0</span>
    </div>
  )
}

export default CartWidget