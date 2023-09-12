import { useState } from "react"

// coustome HOOK
export const useCounter = (min, max)=>{

    const [count, setCount] = useState(min)
    //sumar
    const addCount = () => {
        if(count < max ) setCount(count + 1)
    }
    //restar
    const removeCount = () => {
        if(count > min) setCount(count - 1)
        
    }
    return {count, addCount, removeCount}
}