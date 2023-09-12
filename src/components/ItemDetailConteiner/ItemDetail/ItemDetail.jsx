import ItemCount from "../../Counter/itemCount"
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const onAdd = (count) => {
        console.log('la cantidad seleccionada es:', count)
    }

    return (
        <>
            <div className="detail">
                <div className="detail-img">
                    <img className="w-100" src={product.img} alt="imagen producto" />
                </div>
                <div>
                    <h1> {product.name} </h1>
                    <p> {product.price} </p>
                    <div>
                        <p> todos los colores-momentaneo</p>
                    </div>
                    <div>
                        <p>todos los talels-momentaneo</p>
                    </div>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                </div>
            </div>
            <div>
                <div> {product.detail} </div>
                <div>
                    aca van mas titulos
                </div>
            </div>
        </>
    )
}

export default ItemDetail