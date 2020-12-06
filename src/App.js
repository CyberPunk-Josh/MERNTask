import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/Proyectos/ProyectoState';
import TareaState from './context/Tareas/TareasState';
import AlertaState from './context/Alertas/alertaState';
import AuthState from './context/Autenticacion/AuthState';


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
                <Route exact path='/proyectos' component={Proyectos}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
