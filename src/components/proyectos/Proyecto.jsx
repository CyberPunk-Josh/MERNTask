import React, {useContext} from 'react';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';

const Proyecto = ({proyecto}) => {

    // Obtener el state del formulario de ProyectoContext usando useContext:
    const proyectosContext = useContext(ProyectoContext);
    // extraer el valor del formulario: false del context creado:
    const { proyectoActual } = proyectosContext;

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={ () => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;