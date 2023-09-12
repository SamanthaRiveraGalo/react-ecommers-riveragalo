import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockfetch"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    //estado
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    //api
    useEffect(() => {

        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <ItemDetail  product={product}/>
        </div>
    )
}

export default ItemDetailConteiner