import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

//creamos el context
export const ModalContext = createContext()

const ModalProvider = (props) => {

    //state del provider
    const [idReceta, setIdReceta] = useState(null)
    const [recetaInfo, setReceta] = useState({})

    //cuando tengamos el ID de una receta entonces ejecutamos la API

    useEffect(() => {
        const getReceta = async () => {
            if(!idReceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await axios.get(url)
            console.log(resultado.data.drinks)
            setReceta(resultado.data.drinks[0])

        }
        getReceta()
    }, [idReceta])

    return (
        <ModalContext.Provider
            value={{
                recetaInfo,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider