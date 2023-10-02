import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import ItemList from "../ItemList/itemList"

//Estilo
import './ItemListConteiner.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { cid } = useParams()

  useEffect(() => {
    if (cid) {

      const baseDatos = getFirestore()
      const queryCollection = collection(baseDatos, 'products')
      const queryFilter = query(queryCollection, where('category', '==', cid))
      getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))

    } else {

      const baseDatos = getFirestore()
      const queryCollection = collection(baseDatos, 'products')
      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
    }

  }, [cid])

  return (
    <div className="row conteiner-products">

      <ItemList products={products} />

    </div>
  )
}

export default ItemListContainer
