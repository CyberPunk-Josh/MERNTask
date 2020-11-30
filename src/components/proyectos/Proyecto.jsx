import React, {useContext} from 'react';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';
import TareaContext from '../../context/Tareas/TareasContext';

const Proyecto = ({proyecto}) => {

    // Obtener el state del formulario de ProyectoContext usando useContext:
    const proyectosContext = useContext(ProyectoContext);
    // extraer el valor del formulario: false del context creado:
    const { proyectoActual } = proyectosContext;

    // obtener la funcion del context de tarea:
    const tareasContext = useContext(TareaContext);
    const {obtenerTareas} = tareasContext;

    // funcion para agregar el proyecto actual:
    const selecionarProyecto = id => {
        proyectoActual(id);  //fijar el proyecto actual
        obtenerTareas(id); //filtrar las tareas cuando se de click
    }

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={ () => selecionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;