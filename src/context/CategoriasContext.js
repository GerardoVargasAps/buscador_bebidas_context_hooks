import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

//Creamos el Context
export const CategoriasContext  = createContext()

//Creamos nuestro Provider, (es de donde saldran nuestros datos (state) y nuestras funciones)
//se agregan props ya que al usarlo en un lgar hay que hacer referencia a los componentes hijos (props.children)
const CategoriasProvider = (props) => {

    //creamos el state de nuestro context
    const [categorias, setCategorias] = useState([])


    //ejecutamos el llamado a la API
    useEffect(() => {
        const getCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url)
            setCategorias(categorias.data.drinks)
        }
        getCategorias()
    }, [])
    
    //retornamos los datos
    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider