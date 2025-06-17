import "./mostrar.css"
import { FaPhone ,FaFolderOpen ,FaFileLines ,FaCertificate  } from "react-icons/fa6";
import ProyectosTom from "../proyectos/proyectosTom";
import Contacto from "../../contacto";
import Conocimientos from "../conocimientos/conocimientos";
import { useState } from "react";
import Proyectos from "../../store/proyectos";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 
import Certificados from "../certificados/certificados";

function Mostrar() {   
  
  
  const [certificados,setCertificados]=useState(false)
   const [contacto,setContacto]=useState(false);
   const [proyectos,setProyectos]=useState(true);
   const [conocimientos,setConocimientos]=useState(false);
   const proyecto = Proyectos(state => state.proyecto);
   const setProyecto = Proyectos(state => state.setProyecto);

    const ref = useRef();
    const isInView = useInView(ref); 
    

    return(
        <>
        
        <div className="seccion-mostrar">
           <motion.div
           ref={ref}
             initial={{y:50, opacity:0} }
             animate={isInView ? { y: 0 ,opacity:1} : {}}
             transition={{duration:0.7}}
           className="seccion-mostrar-titulo">
           <h4>Portafolio de exhibición</h4>
           </motion.div>
               
          
          <motion.div
            ref={ref}
            initial={{y:50, opacity:0} }
            animate={isInView ? { y: 0 ,opacity:1} : {}}
            transition={{duration:0.7, delay:0.3}}
          className="Caja-botones">
           
           <div onClick={()=>{setProyecto(!proyecto);setProyectos(!proyectos); setContacto(false);setConocimientos(false);setCertificados(false)}} className="Boton-mostrar"> 
                 <i><FaFolderOpen/></i>
                 <b>Proyectos</b>
           </div>

           <div onClick={()=>{setConocimientos(!conocimientos); setContacto(false);setProyectos(false);setCertificados(false)}} className="Boton-mostrar"> 
                 <i><FaFileLines/></i>
                 <b>Conocimientos</b>
           </div>

           <div onClick={()=> {setContacto(!contacto); setProyectos(false);setConocimientos(false);setCertificados(false)}} className="Boton-mostrar"> 
                 <i><FaPhone /></i>
                 <b>Contacto</b>
           </div>

           <div onClick={()=> {setCertificados(!certificados); setProyectos(false);setConocimientos(false);setContacto(false)}} className="Boton-mostrar"> 
                 <i><FaCertificate /></i>
                 <b>Certificados</b>
           </div>

          </motion.div>  
          <div>
 {proyectos&&(
                <ProyectosTom/>
                  )}
         </div>
          <div>
            {contacto&&(
                <Contacto/>
            )}
         </div>
         <div>
            {conocimientos&&(
                <Conocimientos/>
            )}
         </div>
         <div>
          {certificados&&(
            <Certificados/>
          )}
         </div>
          
       
            
        </div>
        
        </>
    )
    
}
export default Mostrar