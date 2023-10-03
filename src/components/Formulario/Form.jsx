import React from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

//Estilo
import './Form.css'

export const Form = ({ handleOnChange, dataForm, error, validation }) => {

    const { cartList, precioTotal, deleteCart } = useCartContext()

    const navigate = useNavigate()

    const handleAddOrder = async (evt) => {

        evt.preventDefault()

        if (validation()) {

            const order = {}
            order.buyer = dataForm
            order.items = cartList.map(prod => {
                return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity }
            })
            order.total = precioTotal()

            const queryDB = getFirestore()
            const orderCollection = collection(queryDB, 'orders')
            addDoc(orderCollection, order)
                .then(({ id }) => {
                    navigate('/detalleCompra/' + id)
                    deleteCart()
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <form className='form' onSubmit={handleAddOrder}>
                <h1>Formulario de Compra</h1>
                <div className='conteiner-imput'>
                    <div className='input'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ingrese el nombre"
                            value={dataForm.name}
                            onChange={handleOnChange}
                        />
                        {error && error.name && <span className='span-input'>{error.name}</span>}
                    </div>
                    <div className='input'>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Ingrese su apellido"
                            value={dataForm.lastname}
                            onChange={handleOnChange}
                        />
                        {error && error.lastname && <span className='span-input'>{error.lastname}</span>}
                    </div>
                </div>
                <div className='conteiner-imput'>
                    <div className='input'>
                        <input
                            type="text"
                            name="email"
                            placeholder="Ingrese su email"
                            value={dataForm.email}
                            onChange={handleOnChange}
                        />
                        {error && error.email && <span className='span-input'>{error.email}</span>}
                    </div>
                    <div className='input'>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Ingrese su numero de telefono"
                            value={dataForm.phone}
                            onChange={handleOnChange}
                        />
                        {error && error.phone && <span className='span-input'>{error.phone}</span>}
                    </div>
                </div>

                <button className='boton-finalizar'>Finalizar Compra</button>

            </form>
        </div>
    )
}
