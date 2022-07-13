import './App.css';
import logoFrecodecamp from './img/logo-freecodecamp.png'

import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={logoFrecodecamp} className='freecodecamp-logo' alt='Logo freecodecamp' />
      </div>
      <div className="tareas-lista-principal">
        <h1>Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
