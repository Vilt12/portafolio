import "./conocimientos.css"
import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 
function Conocimientos() {

    const ref = useRef();
    const isInView = useInView(ref); 

  const imagenes=[
    
    {Link:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" },
    {Link:"https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    {Link:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png" },
    {Link:"https://cdn-icons-png.flaticon.com/512/3488/3488408.png" },
    {Link:"https://static-00.iconduck.com/assets.00/mongodb-original-wordmark-icon-2015x2048-n6r3kuri.png" },
    {Link:"https://www.mementotech.in/assets/images/icons/express.png" },
    {Link:"https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" },
    {Link:"https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    {Link:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" },
    {Link:"https://www.manualweb.net/img/logos/java.png" },]


    return(
        <>
        <div className="seccion-conocimientos">
           
           <div className="seccion-conocimientos-caja-img"> 
            <div ref={ref} className="seccion-conocimientos-imagenes">
          
          {imagenes.map((i,index)=>(
           
           <motion.img 
              initial={{  scale:0  }}
             animate={isInView ? { scale:1} : {}}
             transition={{ duration:0.5}}
           src={i.Link} alt=""  height={"100px"} width={"100px"}/>
           
            

          ))}
            
          
            </div>
           </div>
            
        </div>
        </>
    )
}
export default Conocimientos