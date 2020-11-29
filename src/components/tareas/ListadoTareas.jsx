import React, {Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Elegir General', estado: true},
        {nombre: 'Producir Armamaneto', estado: false},
        {nombre: 'Elegir Dictador', estado: true},
        {nombre: 'Cerrar Fronteras', estado: false}
    ];

    return ( 
        <Fragment>
            <h2>Proyecto: URSS</h2>

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
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;