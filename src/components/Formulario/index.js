import React, { useContext, useState } from 'react';

//importamos el context que creamos anteriormente
import { CategoriasContext } from '../../context/CategoriasContext';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    //pasamos el context a useContext
    const { categorias } = useContext(CategoriasContext)
  
    //funcion para leer los contenidos de los inputs
    const getDatos = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    console.log('state >>>', busqueda)

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingredientes</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={getDatos}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={getDatos}
                    >
                        <option value="">-- Seleccione una Categoría --</option>
                        {
                            categorias.map(categoria => (
                                <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Recetas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;