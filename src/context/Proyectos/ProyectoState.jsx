import React, {useReducer} from 'react';
import uuid from 'react-uuid';
// importar el context creado
import ProyectoContext from './ProyectoContext';
import proyectoReducer from './ProyectoReducer';
// EXTRAER EL ARCHIVO DE TYPES:
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types';




const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Invadir Polonia'},
        {id: 3, nombre: 'URSS'},
        {id: 4, nombre: 'MERN'}
    ]

    const initialState = {

        proyectos : [],

        formulario : false,

        errorformulario: false,

        proyecto: null
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

    // Agregar nuevo Proyecto:
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();

        // insertar el proyecto en el state:
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // validar el formulario de errores:
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto al que el usuario le dio click:
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // eliminar un proyecto:
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;