import logo from './logo.svg';
import './App.css';
import Presentacion from './presentacion';
import Contacto from './contacto';
import Conocimientos from './conocimientos';
import Proyectos from './proyectos';
function App() {
  return (
    <div className="App">
    
         <Presentacion></Presentacion>
    <Contacto></Contacto>
    <Conocimientos></Conocimientos>
      <Proyectos></Proyectos>
   
    </div>
  );
}

export default App     