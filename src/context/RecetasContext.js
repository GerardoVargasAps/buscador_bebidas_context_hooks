import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [busqueda, saveBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    //agregamos un escuchador para que se ejecute la API cuando cambiemos algo en la busqueda
    useEffect(() => {
        const getRecetas = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`
        }
        //getRecetas()
    }, [busqueda])


    //retornamos los datos
    return (
        <RecetasContext.Provider
            value={{
                saveBusqueda
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}
 
export default RecetasProvider;