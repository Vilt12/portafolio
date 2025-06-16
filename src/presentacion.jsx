import "./presentacion.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaBolt, FaBong, FaChargingStation, FaPlay } from "react-icons/fa6";

function Presentacion({ proyectosRef }) {
  const ref = useRef();

  const scrollToSobreMi = () => {
    window.scrollTo({
      top: proyectosRef.current.offsetTop - 100,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.div className="iconos-presentacion">
        <motion.div className="cajita-iconos">
          <motion.i
            ref={ref}
            initial={{ opacity: 0, y: 250, x: 250, rotateZ: 480 }}
            animate={{ opacity: 1, y: 0, x: 0, rotateZ: 0 }}
            transition={{ ease: "circIn", duration: 0.6, delay: 5 }}
          >
            <FaBolt />
          </motion.i>
          <motion.i
            ref={ref}
            initial={{ opacity: 0, y: 250, x: -250, rotateZ: 480 }}
            animate={{ opacity: 1, y: 0, x: 0, rotateZ: 0 }}
            transition={{ ease: "circIn", duration: 0.6, delay: 5 }}
          >
            <FaBong />
          </motion.i>
        </motion.div>

        <motion.div className="cajita-iconos">
          <motion.i
            ref={ref}
            initial={{ opacity: 0, y: -250, x: 250, rotateZ: 480 }}
            animate={{ opacity: 1, y: 0, x: 0, rotateZ: 0 }}
            transition={{ ease: "circIn", duration: 0.6, delay: 5 }}
          >
            <FaChargingStation />
          </motion.i>
          <motion.i
            ref={ref}
            initial={{ opacity: 0, y: -250, x: -250, rotateZ: 480 }}
            animate={{ opacity: 1, y: 0, x: 0, rotateZ: 0 }}
            transition={{ ease: "circIn", duration: 0.6, delay: 5 }}
          >
            <FaPlay />
          </motion.i>
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 3 }}
        className="seccion-1"
      >
        <div className="seccion-presentacion">
          <div className="seccion-1-presentacion">
            <img
              src="https://cdn-icons-png.freepik.com/512/10229/10229090.png"
              alt=""
            />
          </div>

          <div className="seccion-1-titulo">
            <h1>Desarrollador Frontend</h1>
            <div>
              <motion.h2
                className="seccion-1-subtitulo"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.5 }}
              >
                Creando experiencias web modernas
              </motion.h2>

              <motion.p
                className="seccion-1-descripcion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
              >
                Me especializo en desarrollar sitios web rápidos, funcionales y
                atractivos, usando tecnologías como React, NextJS y más.
              </motion.p>

              <motion.div className="seccion-1-botones">
                <motion.button
                  onClick={scrollToSobreMi}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 4.5 }}
                  className="btn-proyectos"
                >
                  Proyectos
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 4.5 }}
                  onClick={scrollToSobreMi}
                  className="btn-contacto"
                >
                  Contacto
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Presentacion;
