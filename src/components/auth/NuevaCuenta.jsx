import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import alertaContext from '../../context/Alertas/alertaContext';
import AuthContext from '../../context/Autenticacion/AuthContext';

const NuevaCuenta = (props) => {

    // extraer los valores del context:
    const AlertaContext = useContext(alertaContext);
    const {alerta, mostrarAlerta} = AlertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // en caso de que el usuario se haya autenticado o registrado o sea un registro duplicado:
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history ])

    // state para iniciar sesion:
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    // extraer de usuario:
    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesion:
    const onSubmit = e =>{
        e.preventDefault();

        // validar que no haya campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === ''|| confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        // password minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe de ser al menos de 6 caracteres', 'alerta-error');
            return;
        }
        // los 2 password iguales
        if(password !== confirmar){
            mostrarAlerta('Los dos passwords no son iguales', 'alerta-error');
            return;
        }
        // pasarlo al action
        registrarUsuario({
            nombre, 
            email,
            password
        })
    }

    return ( 
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input 
                            type='text'
                            id='nombre'
                            name='nombre'
                            value={nombre}
                            placeholder='Tu Nombre'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Tu e-mail'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Tu Password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar password</label>
                        <input 
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            value={confirmar}
                            placeholder='Repite tu password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input 
                            type='submit' className='btn btn-primario btn-block' value='Registrarme'
                        />
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;