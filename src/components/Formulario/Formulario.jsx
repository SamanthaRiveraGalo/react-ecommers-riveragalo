import React from 'react'
import { useState } from "react"
import { formValidation } from './formValidation'
import { Form } from './Form'

const FormValidation = formValidation(Form)

const Formulario = () => {

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        lastname: '',
        email: ''

    })

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
            <FormValidation 
            handleOnChange={handleOnChange} 
            dataForm={dataForm} 
            />
        </>
    )
}

export default Formulario