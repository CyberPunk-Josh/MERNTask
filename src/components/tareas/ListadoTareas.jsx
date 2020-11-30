import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';
import TareaContext from '../../context/Tareas/TareasContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {

     // Extraer proyectos del state inicial
     const proyectosContext = useContext(ProyectoContext);
     const { proyecto, eliminarProyecto } = proyectosContext;

     // obtener las tareas del proyecto:
    const tareasContext = useContext(TareaContext);
    const {tareasproyecto} = tareasContext;

    //  si no hay proyecto seleccionado:
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //  Array destructuring para extraer el proyecto actual.
    const [proyectoActual] = proyecto;


    // elimina un proyecto
    const onclickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasproyecto.length === 0
                    ? (<li className='tarea'><p>No hay Tareas</p></li>)
                    : 
                    <TransitionGroup>
                        {
                            tareasproyecto.map(tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={500}
                                    classNames='tarea'
                                >
                                    <Tarea 
                                        tarea={tarea}
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onclickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;