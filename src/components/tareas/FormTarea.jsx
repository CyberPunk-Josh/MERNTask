import React,{useContext} from 'react';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    //  si no hay proyecto seleccionado:
    if(!proyecto) return null;

    //  Array destructuring para extraer el proyecto actual.
    const [proyectoActual] = proyecto;

    return ( 
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nueva Tarea'
                        name='nombre'
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;