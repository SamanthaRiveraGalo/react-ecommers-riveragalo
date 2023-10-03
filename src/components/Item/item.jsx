import { Link } from "react-router-dom"
import './item.css'

const Item = ({ product }) => {
  return (
    <>
      <div className="card w-25">
        <div className="card-body">
          <img className="card-img w-100" src={product.img} alt="zapatilla nike" />
          <p className="card-nombre">{product.name}</p>
          <p className="card-precio">Precio:${product.price}</p>
        </div>
        <div className="card-footer" id="card-footer">
          <Link to={`/detalle/${product.id}`}>
            <button className="info">Más información</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Item