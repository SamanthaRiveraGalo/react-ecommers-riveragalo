import { useState } from "react"

export const formValidation = (FormWrappedComponent) => {

    const formValidation = (props) => {

        const [error, setError] = useState({})

        const validation = () => {

            let newError = {}

            let isValid = true

            if (!props.dataForm.name) {
                newError.name = '*El campo nombre es obligatorio'
                isValid = false
            }
            if (!props.dataForm.lastname) {
                newError.lastname = '*El campo apellido es obligatorio'
                isValid = false
            }
            if (!props.dataForm.email) {
                newError.email = '*El campo email es obligatorio'
                isValid = false
            }
            if (!props.dataForm.phone) {
                newError.phone = '*El campo telefono es obligatorio'
                isValid = false
            }
            
            setError(newError)
            return isValid
        }

        return <FormWrappedComponent
            {...props}
            error={error}
            validation={validation}
        />

    }
    return formValidation
}