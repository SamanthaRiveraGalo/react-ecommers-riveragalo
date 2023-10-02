import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './Form.css'

export const Form = ({ handleOnChange, dataForm, error, validation }) => {

    const [id, setId] = useState('')

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
                .then(({ id }) => setId())
                .catch(err => console.log(err))
                .finally(() => {
                    setDataForm({
                        name: '',
                        phone: '',
                        lastname: '',
                        email: ''
                    })
                    vaciarCarrito()
                })
        }
    }

    return (
        <div>
            <form className='form' onSubmit={handleAddOrder}>
                <h1>Formulario de Compra</h1>
                <div className='conteiner-imput'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ingrese el nombre"
                        value={dataForm.name}
                        onChange={handleOnChange}
                    />
                    {error && error.name && <span>{error.name}</span>}
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Ingrese su apellido"
                        value={dataForm.lastname}
                        onChange={handleOnChange}
                    />
                    {error && error.lastname && <span>{error.lastname}</span>}
                </div>
                <div className='conteiner-imput'>
                    <input
                        type="text"
                        name="email"
                        placeholder="Ingrese su email"
                        value={dataForm.email}
                        onChange={handleOnChange}
                    />
                    {error && error.email && <span>{error.email}</span>}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Ingrese su numero de telefono"
                        value={dataForm.phone}
                        onChange={handleOnChange}
                    />
                    {error && error.phone && <span>{error.phone}</span>}

                </div>
                <div className='conteiner-button'>
                    <button className='boton-finalizar'>Finalizar Compra</button>
                </div>

            </form>
        </div>
    )
}
