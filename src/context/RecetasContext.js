import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [busqueda, saveBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

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