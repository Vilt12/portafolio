import "./certificados.css"
import { motion } from "framer-motion"

function Certificados() {
    return(
    
        
        <motion.div 
        initial={{y:100 , opacity:0} }
             animate={{ opacity:1,y:0,}} 
             transition={{duration:0.7}}
        
        className="seccion-certificados">
           
           <div   >
            <img src="Certificado.jpeg" alt="" />
           </div>
        </motion.div>

    )
}

export default Certificados