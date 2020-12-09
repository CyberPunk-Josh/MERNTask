import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AlertaContext from '../../context/Alertas/alertaContext';


const ListadoProyectos = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    // obtener proyectos cuando carga el componente:
    useEffect(() => {

        // si hay un error:
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si proyectos tiene contenido:
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return ( 
        <ul className='listado-proyectos'>

        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}

           <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyectos._id}
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