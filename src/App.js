import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/Proyectos/ProyectoState';
import TareaState from './context/Tareas/TareasState';
import AlertaState from './context/Alertas/alertaState';
import AuthState from './context/Autenticacion/AuthState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';

// revisar si existe un token:
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}


function App() {
  
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/nueva-cuenta' component={NuevaCuenta}/>
                <RutaPrivada exact path='/proyectos' component={Proyectos}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
