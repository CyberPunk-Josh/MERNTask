import React,{useContext, useState, useEffect} from 'react';
import ProyectoContext from '../../context/Proyectos/ProyectoContext';
import TareaContext from '../../context/Tareas/TareasContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la funcion del context de tarea:
    const tareasContext = useContext(TareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea} = tareasContext;

    // useEffect que detecta si hay una tarea seleccionada:
    useEffect( () => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // extraer el nombre del proyecto;
    const { nombre } = tarea;

    //  si no hay proyecto seleccionado:
    if(!proyecto) return null;

    //  Array destructuring para extraer el proyecto actual.
    const [proyectoActual] = proyecto;

    // leer los valores del formulario.
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        // revisar si es edicion o si es nueva:
        if(tareaseleccionada === null){
            // tarea nueva:
            // agregar la nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else{
            // actualizar tarea existente:
            actualizarTarea(tarea);
            // Elimina tarea seleccionada del state:
            limpiarTarea();
        }

        // pasar la validacion

        // SE AGREGA "errortarea" COMO FALSE EN EL REDUCER DE AGREGAR TAREA

        // Obtener y filtar las tareas del proyecto actual:
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return ( 
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nueva Tarea'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;