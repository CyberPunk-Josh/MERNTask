import React, {Fragment, useContext, useState} from 'react';
// importar el context para mostrar el formulario de nuevo proyecto de forma condicional:
import ProyectoContext from '../../context/Proyectos/ProyectoContext';

const NuevoProyecto = () => {


    // Obtener el state del formulario de ProyectoContext usando useContext:
    const proyectosContext = useContext(ProyectoContext);
    // extraer el valor del formulario: false del context creado:
    const { formulario, mostrarFormulario } = proyectosContext;

    // State para el proyecto:
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    // extraer el nombre del proyecto:
    const {nombre} = proyecto;

    // leer los valores del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    };

    // cuando el usuario envia un proyecto:
    const onSubmitProyecto = e =>{
        e.preventDefault();

        // validar el proyecto

        // agregar al state

        // reiniciar el formulario
    }

    // mostrar el formulario usando el hook creado:

    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button 
            className='btn btn-block btn-primario' 
            type='button'
            onClick={onClickFormulario}
        >Nuevo Proyecto</button>
        { formulario ?
            (
                <form 
                className='formulario-nuevo-proyecto'
                onSubmit={onSubmitProyecto}
                >
                <input 
                    type="text"
                    className='input-text'
                    placeholder='Nuevo Proyecto'
                    name='nombre'
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input 
                    type="submit"
                    className='btn btn-primario btn-block'
                    value='Agregar Proyecto'
                />
                </form>
            ) : null    
    }   
        </Fragment>
     );
}
 
export default NuevoProyecto;