import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

//creamos el context
export const ModalContext = createContext()

const ModalProvider = (props) => {

    //state del provider
    const [idReceta, setIdReceta] = useState(null)
    const [receta, setReceta] = useState({})

    //cuando tengamos el ID de una receta entonces ejecutamos la API

    useEffect(() => {
        const getReceta = async () => {
            if(!idReceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await axios.get(url)
            console.log(resultado.data.drinks)
            setReceta(resultado.data.drinks)

        }
        getReceta()
    }, [idReceta])

    return (
        <ModalContext.Provider
            value={{
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider