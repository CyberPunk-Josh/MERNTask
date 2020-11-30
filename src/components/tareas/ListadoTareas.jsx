import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';

const ListadoTareas = () => {

     // Extraer proyectos del state inicial
     const proyectosContext = useContext(ProyectoContext);
     const { proyecto, eliminarProyecto } = proyectosContext;

    //  si no hay proyecto seleccionado:
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //  Array destructuring para extraer el proyecto actual.
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir General', estado: true},
        {nombre: 'Producir Armamaneto', estado: false},
        {nombre: 'Elegir Dictador', estado: true},
        {nombre: 'Cerrar Fronteras', estado: false}
    ];

    // elimina un proyecto
    const onclickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0
                    ? (<li className='tarea'><p>No hay Tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
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