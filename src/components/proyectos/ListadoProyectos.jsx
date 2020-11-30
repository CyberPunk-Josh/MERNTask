import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';


const ListadoProyectos = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // obtener proyectos cuando carga el componente:
    useEffect(() => {
        obtenerProyectos();

    }, []);

    // revisar si proyectos tiene contenido:
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return ( 
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyectos.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;