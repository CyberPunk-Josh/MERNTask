// EXTRAER EL ARCHIVO DE TYPES:
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types';

export default (state, action) => {
    switch(action.type){

        case FORMULARIO_PROYECTO:
            return{
                // se crea una copia del state:
                ...state,
                // formulario se cambia a true:
                formulario : true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }

        default:
            return state;
    }
}