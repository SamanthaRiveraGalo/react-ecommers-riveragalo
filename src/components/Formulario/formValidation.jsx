import { useState } from "react"

export const formValidation = (FormWrappedComponent) => {
    const FormValidation = (props) => {
        const [error, setError] = useState({})

        const validation = () => {
            let newError = {}
            let isValid = true
            if(!props.dataForm.name){
                newError.name = '*El campo esta vacio'
                isValid = false
            }
            if(!props.dataForm.name){
                newError.name = '*El campo esta vacio'
                isValid = false
            }
            if(!props.dataForm.name){
                newError.name = '*El campo esta vacio'
                isValid = false
            }
            if(!props.dataForm.name){
                newError.name = '*El campo esta vacio'
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
    return FormValidation
}