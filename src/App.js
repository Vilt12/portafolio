
import './App.css';
import Presentacion from './presentacion';
import Contacto from './contacto';
import Conocimientos from './conocimientos';
import ProyectosTom from './components/proyectos/proyectosTom';
import ConocimientosT from "./components/conocimientos/conocimientos"
import SobreMi from './components/sobreMi/sobreMi';
import Mostrar from './components/mostrar/mostrar';
import { useState } from 'react';
import Loader from './components/loader/loader';
import { useRef } from 'react';
function App() {
  


  const proyectosRef = useRef(null);


  
  return (
    <div className="App">
  <div> 
    <Loader/>
  <div >

    <Presentacion proyectosRef={proyectosRef} ></Presentacion>
  </div>
 <SobreMi/>   
   <div  ref={proyectosRef}>
   
      <Mostrar />
</div>

 
   
  
</div>

     <div>
     
      <ul className='Lista-de-puntos'>
       
       <li>.</li>
       <li>.</li>
        
      </ul>

      <ul className='Lista-de-puntos-2'>
       
       <li></li>
       <li></li>
        
      </ul>
     </div>

    </div>
  );
}

export default App     