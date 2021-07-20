import React, { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

function getModalStyle(){

    // definimos la ubicación del modal
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    }
}

// le agregamos unos estilos al modal
const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '50vh',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    }
}))


const Receta = ({ receta }) => {

    //Configuración del modal de material UI

    const [ modalStyle ] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    //extraemos los valores del Modal Context
    const { recetaInfo, setIdReceta, setReceta } = useContext(ModalContext)

    console.log('recetaInfo >><', recetaInfo)

    return ( 
       <div className="col-md-4 mb-3">
        <div className="card">
            <h2 className="card-header">{receta.strDrink}</h2>
            <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
            <div className="card-body">
                <button
                    type="button" 
                    className="btn btn-block btn-primary"
                    onClick={() => {
                        setIdReceta(receta.idDrink)
                        handleOpen()
                    }}
                >
                    Ver Receta
                </button>
                
                {/* Agregamos el modal y le pasamos los estilos anteriormente declarados */}
                <Modal
                    open={open}
                    onClose={() => {
                        setIdReceta(null)
                        setReceta({})
                        handleClose()
                    }}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2>{recetaInfo.strDrink}</h2>
                        <h3 className="mt-4">Instrucciones</h3>
                        <p>
                            {recetaInfo.strInstructions}
                        </p>
                        <img className="img-fluid my-4" src={recetaInfo.strDrinkThumb} alt={`Imagen de ${recetaInfo.strDrink}`} />
                    </div>
                </Modal>
            </div>
        </div>
       </div>
     );
}
 
export default Receta;