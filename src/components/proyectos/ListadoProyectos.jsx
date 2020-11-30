import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const ListadoProyectos = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // obtener proyectos cuando carga el componente:
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // revisar si proyectos tiene contenido:
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return ( 
        <ul className='listado-proyectos'>
           <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyectos.id}
                        timeout={500}
                        classNames='proyecto'
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;