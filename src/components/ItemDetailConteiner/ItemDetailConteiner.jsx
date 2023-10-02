import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    //estado
    const [product, setProduct] = useState({})
    const { pid } = useParams()
    //api
    useEffect(() => {
        const baseDatos = getFirestore()
        const queryDoc = doc(baseDatos, 'products',  pid )
        getDoc(queryDoc)
            .then(resp => ({ id: resp.id, ...resp.data() }))
            .then(resp => setProduct(resp))
    }, [])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailConteiner