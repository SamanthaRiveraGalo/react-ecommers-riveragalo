import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { mFetch } from "../../utils/mockfetch"
import ItemList from "../ItemList/itemList"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {cid} = useParams()

  useEffect(() => {
    if(cid){
      mFetch()
        .then(respuesta => setProducts(respuesta.filter(product => cid === product.category)))
        .catch(err => console.log(err))
    } else{
      mFetch()
      .then(respuesta => setProducts(respuesta))
      .catch(err => console.log(err))
    }

  },[cid])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}
export default ItemListContainer
