import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import alertaContext from '../../context/Alertas/alertaContext';
import AuthContext from '../../context/Autenticacion/AuthContext';

const Login = (props) => {

    // extraer los valores del context:
    const AlertaContext = useContext(alertaContext);
    const {alerta, mostrarAlerta} = AlertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    // en caso de que el usuario o password no exista:
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history ])

    // state para iniciar sesion:
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });

    // extraer de usuario:
    const {email, password} = usuario;

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
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // pasarlo al action
        iniciarSesion({email, password});
    }

    return ( 
        <div className='form-usuario'>
             { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <label htmlFor='password'>password</label>
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
                        <input 
                            type='submit' className='btn btn-primario btn-block' value='Iniciar Sesion'
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;