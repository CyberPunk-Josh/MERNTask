import React, {useReducer} from 'react';
// importar el context creado
import ProyectoContext from './ProyectoContext';
import proyectoReducer from './ProyectoReducer';
// EXTRAER EL ARCHIVO DE TYPES:
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types';




const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Invadir Polonia'},
        {id: 3, nombre: 'URSS'},
        {id: 4, nombre: 'MERN'}
    ]

    const initialState = {

        proyectos : [],

        formulario : false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // serie de funciones para el CRUD, estas se cargar dentro del value de ProyectoContext.Provider y despues se mandan al reducer para ejecutar la accion, todas las acciones de deben de mapear para realuzar una accion
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos:
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;