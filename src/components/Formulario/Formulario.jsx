import React from 'react'
import { useState } from "react"
import { Form } from 'react-router-dom'
import { formValidation } from './formValidation'

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