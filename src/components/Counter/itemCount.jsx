import { useCounter } from "../hooks/useCounter"
import './itemCount.css'

const ItemCount = ({initial,stock, onAdd}) => {

    const {count, addCount, removeCount} = useCounter(initial,stock)

    return (
        <div className="contenedor-contador">
            <button className="restar" onClick={removeCount}> - </button>
            <label>
                <p className="contador">{count}</p>
            </label>
            <button className="sumar" onClick={addCount}> + </button>
            <button className="add" onClick={()=> onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount