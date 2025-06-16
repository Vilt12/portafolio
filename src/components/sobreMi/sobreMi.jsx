import "./sobreMi.css"
import miFoto from "../../Superfoto.jpeg"
import { FaBookAtlas,FaFolderOpen ,FaFileLines  } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function SobreMi(params) {
 
    const ref = useRef();
     const isInView = useInView(ref);

  const tarjetas=[
    {icono:<FaFolderOpen/>,cantidad:5,titulo:"Cantidad de proyectos"},
    {icono:<FaFileLines/>,cantidad:1,titulo:"Certificados"},
    {icono:<FaBookAtlas/>,cantidad:4,titulo:"Años de estudio"}

]
  
    return(
        <>
         <div ref={ref} className="seccion-sobreMi">

            <motion.div  
             initial={{y:50, opacity:0} }
             animate={isInView ? { y: 0 ,opacity:1} : {}}
             transition={{duration:0.7}}
            
             className="seccion-sobreMi-caja-titulo">
                <h4
                >
                    Sobre mi
                
                </h4>
            </motion.div>

<div  className="seccion-sobreMi-caja-informacion">
    <div      className="seccion-sobreMi-caja-informacion-datos">
       <motion.h4
        initial={{x:-50, opacity:0} }
        animate={isInView ? { x: 0 ,opacity:1} : {}}
        transition={{duration:0.7, delay:0.3}}
       >Hola, yo soy</motion.h4>
       <motion.b
        initial={{opacity:0} }
        animate={isInView ? {opacity:1} : {}}
        transition={{duration:0.7, delay:0.7}}
       
       >
        Tomás Nahuel Villegas
        </motion.b>
       <div  className="seccion-sobreMi-caja-informacion-datos-parrafo">
       <motion.p
           initial={{opacity:0} }
           animate={isInView ? {opacity:1} : {}}
           transition={{duration:0.7, delay:1}}
       >Desarrollador Frontend apasionado por crear interfaces modernas, limpias y funcionales.
Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como React, Next.js, y Node.js, siempre enfocado en ofrecer una excelente experiencia de usuario y un código escalable.
Me encanta integrar el diseño con el desarrollo, optimizar el rendimiento y construir soluciones visualmente atractivas, ya sea para proyectos personales, startups o empresas.</motion.p>
   
       </div>
     
      <div className="seccion-sobreMi-caja-tarjetas">
{tarjetas.map((t,index)=>(
    <motion.div 
     
    initial={{x:-100*index, opacity:0} }
    animate={isInView ? {x:0, opacity:1} : {}}
    transition={{duration:0.7, delay:1.2}}
    className="seccion-sobreMi-tarjetas">
    <div className="seccion-sobreMi-tarjetas-icono">
        <i>{t.icono}</i>
        <b>{t.cantidad}</b>
    </div>
    <div className="seccion-sobreMi-tarjetas-titulo" >
        <p>{t.titulo}</p>
    </div>
    </motion.div>
))}



</div>
   </div>
    <motion.div 
        initial={{scale:0} }
        animate={isInView ? { scale:1} : {}}
        transition={{duration:0.7, delay:1.7}}
        className="caja-foto"
    
    >
        <img src={miFoto} alt="" />
    </motion.div>
    
 
</div>

         </div>
        </>
    )
}
export default SobreMi