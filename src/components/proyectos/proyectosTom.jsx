import "./proyectos.css"
import Proyectos from "../../store/proyectos"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPython,Fajs,FaReact  } from "react-icons/fa6";
function ProyectosTom() {

  const ref = useRef();
  const isInView = useInView(ref, { once: true });  
  const proyecto = Proyectos(state => state.proyecto);
  const setProyecto = Proyectos(state => state.setProyecto);

  const proyectos=[
   
  {TecnologiasB:"NodeJS",TecnologiasF:"NextJS + css",Link:"https://gestionat-9iia.vercel.app/", image:"Gestionat.png",  titulo:"Gestionat", descripcion:"Aplicacion para administracion de negocios", tipo:"Gestion de negocio"  },
    
  {TecnologiasB:"NodeJS - Auth0",TecnologiasF:"React + css",Link:"https://foro-gold.vercel.app/", image:"Fosforito.png",  titulo:"Fosforito", descripcion:"Aplicacion para realizar publicaciones webs", tipo:"Foro web"  },
     
  {TecnologiasB:"NodeJS - Auth0",TecnologiasF:"React + css ",Link:"https://tienda-lovat.vercel.app/", image:"tienda.png",  titulo:"Tienda", descripcion:"Aplicacion para tienda o restaurante", tipo:"Gestion de tiendas"  },
     
  {TecnologiasB:"NodeJS",TecnologiasF:"React + Tailwind",Link:"https://stockly-qzul8tjbx-gianellas-projects-ed866b2f.vercel.app/", image:"Stockly.png",  titulo:"Stockly", descripcion:"Aplicacion de control de inventario", tipo:"Gestion de inventario"  }
     
]


    return(
    <>
    
    <motion.div  ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5 }} className="seccion-proyectos">
          
          <div className={`seccion-proyectos-datos`}> 
                    <div>
                        <p>{proyectos.length}</p>
                    </div>
                    <div>
                      <b>
                      Proyectos totales
                      </b>
                     
                    </div>
          </div>

          <div className={`seccion-proyectos-caja-tarjetas`}>
  {proyectos.map((p, index) => (
    <a href={p.Link} key={index}>
      <div
        style={{ "--i": index + 1 }}
        className={`flip-card ${proyecto ? "activo" : ""}`}
      >
        <div className="flip-card-inner">
          {/* Parte delantera */}
          <div className="flip-card-front">
            <div className="seccion-proyectos-tarjetas-imagen">
              <img src={p.image} alt="" />
            </div>
            <div className="seccion-proyectos-tarjetas-informacion">
              <div className="seccion-proyectos-tarjetas-clasificacion">
                <b>WEB</b>
                <p>✨Funcionando</p>
              </div>
              <div className="seccion-proyectos-tarjetas-titulo">
                <h4>{p.titulo}</h4>
              </div>
              <div className="seccion-proyectos-tarjetas-descripcion">
                <p>{p.descripcion}</p>
              </div>
              <div className="seccion-proyectos-tarjetas-estado">
                <p>🎯{p.tipo}</p>
              </div>
            </div>
          </div>

          {/* Parte trasera */}
          <div className="flip-card-back">
        
          <div className="seccion-proyectos-tarjetas-tecnologias">
          <h4>Tecnologias Frontend Usadas</h4>
           <div>
               <b>
                {p.TecnologiasF}
               </b>
            </div> 
          
           </div>
          
           <div className="seccion-proyectos-tarjetas-tecnologias">
            <h4>Tecnologias Backend Usadas</h4>
           </div>
           <div>
            <b>{p.TecnologiasB}</b>
           </div>

           <div className="seccion-proyectos-tarjetas-indicacion">
               <b>
                Si desea conocer mas sobre este proyecto solo haga <span>Click</span> en la tarjeta
               </b>
           </div>
          </div>
        </div>
      </div>
    </a>
  ))}
</div>

    </motion.div>

    </>
  )

}

export default ProyectosTom