import { Link } from "react-router-dom"
import './item.css'

const Item = ({ product }) => {
  return (
    <>
      <div className="card w-25">
        <div className="card-body">
          <img className="card-img w-100" src={product.img} alt="zapatilla nike" />
          <p>{product.name}</p>
          <p>Precio:${product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className="card-footer">
          <Link to={`/detalle/${product.id}`}>
            <button className="info">Mas informacion</button>
          </Link>
          <button className="agregar-carrito">Agregar al carrito</button>
        </div>
      </div>
    </>
  )
}

export default Item