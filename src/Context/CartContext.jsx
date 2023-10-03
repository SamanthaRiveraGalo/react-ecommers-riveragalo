import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const addProduct = (newProduct)=>{

        const index = isProduct(newProduct.id)

        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity // modique una prop de un obj de cart
            setCartList([...cartList]) // agregar esto si o si 
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])            
        }
    }

    const cantidadTotal = ()=> cartList.reduce ((cantidadTotal, objProduct)=> cantidadTotal += objProduct.quantity, 0)

    const precioTotal = ()=> cartList.reduce ((cantidadTotal, objProduct)=> cantidadTotal += (objProduct.quantity * objProduct.price), 0)

    const eliminarItem = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))

    const deleteCart = ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}