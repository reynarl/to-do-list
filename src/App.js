import './App.css';
import logoFrecodecamp from './img/logo-freecodecamp.png'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={logoFrecodecamp} className='freecodecamp-logo' alt='Logo freecodecamp' />
      </div>
    </div>
  );
}

export default App;
