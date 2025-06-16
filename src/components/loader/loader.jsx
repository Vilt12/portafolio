import { useState, useEffect } from "react";
import "./loader.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 
import { FaAward,FaBrain ,FaClipboardCheck  } from "react-icons/fa6";
function Loader() {
 const iconos= [
    {dibujo:<FaAward/>},
    {dibujo:<FaBrain/>},
    {dibujo:<FaClipboardCheck/>}
]
 
 
    const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();
    const isInView = useInView(ref); 
  useEffect(() => {
    // Simulación de carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="loader"
      initial={{ y: 0 }}
      animate={{ y: -1000 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
        <div className="iconos">
            {iconos.map((i,index)=>(
                <motion.i 
                key={index}
                initial={{opacity:0, y: -50 }}
         animate={{ opacity:1, y: 0}}
         transition={{ duration: 0.5, delay:0.2*index}}
                >{i.dibujo}
                
                </motion.i>
            ))}
        </div>
        <div className="titulo-loader">
        <motion.h4
         initial={{opacity:0, x: 100 }}
         animate={{ opacity:1, x: 0 }}
         transition={{ duration: 0.5,}}
        >Bienvenido </motion.h4>     
        <motion.b
         initial={{opacity:0, x: 110 }}
         animate={{ opacity:1, x: 0 }}
         transition={{ duration: 0.5, delay:0.5}}
        
        >A </motion.b> 
        <motion.b
         initial={{opacity:0, x: 120 }}
         animate={{ opacity:1, x: 0 }}
         transition={{ duration: 0.5, delay:0.7}}
        >Mi</motion.b>
        </div>
    
      <motion.h5
         initial={{opacity:0, y: 120 }}
         animate={{ opacity:1, y: 0 }}
         transition={{ duration: 0.5, delay:0.9}}
      
      >Portafolio Web</motion.h5>
         <motion.div
         className="caja-saludo"
           initial={{opacity:0, y: 120 }}
           animate={{ opacity:1, y: 0 }}
           transition={{ duration: 0.5, delay:1.3}}
         >
      <motion.p
        initial={{x:220}}
        animate={{x:0}}
        transition={{ duration: 0.5, delay:1.6}}
        >
    
        Disfrute la visita 

      </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
