import "./proyectos.css";
import proyecto1 from './tienda.png'

function Proyectos() {
   
    function handleScroll() {
        const elementos = document.querySelectorAll(".seccion-proyectos-caja");
        elementos.forEach((elemento) => {
          const elementoRect = elemento.getBoundingClientRect();
          const windowHeight = window.innerHeight;
      
          if (elementoRect.top < windowHeight / 1.1) {
            elemento.classList.add("mostrar");
          }else{
            elemento.classList.remove("mostrar")
          }
        });
      }
      
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("load", handleScroll);
    return(
        
        <>
    
        <div className="seccion-proyectos">
         <div className="seccion-proyectos-titulo">
             <h4>Proyectos</h4>   
         </div>
           
        <div className="seccion-proyectos-caja">

    
           <div className="seccion-proyectos-tarjeta">
    
         <a href="https://tienda-lovat.vercel.app/"><img src={"https://cdn-icons-png.flaticon.com/128/869/869636.png"} alt=""/></a>
         <h4 >Tienda-Ecommerce</h4>
            </div>
            
           <div className="seccion-proyectos-tarjeta">
    
         <a href="https://foro-gold.vercel.app/"><img src={"https://globalitec.gt/web/image/78729/fkmjededijkfijkg.jpg"} alt=""/></a>
         <h4 >Tienda-Ecommerce</h4>
            </div>
        </div>
        </div>
        </>
    )
}
export default Proyectos