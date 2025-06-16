import "./contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import { motion } from "framer-motion";

function Contacto() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="seccion-contacto">
        <div>
          {copied && (
            <div className="notification">
              ¡Copiado con éxito!
            </div>
          )}
        </div>

        <motion.div
          initial={{ x: 1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="seccion-contacto-sub"
        >
          <a className="tarjeta-contacto" href="https://www.instagram.com/tom.exe2/">
            <span><FontAwesomeIcon color="#ffffff" className="fa-fade " icon={faInstagram} /></span>
            <div className="tarjeta-contacto-titulo">
              <h4>Instagram:</h4>
            </div>
            <p>Enviar mensaje a instagram</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="seccion-contacto-sub"
        >
          <a className="tarjeta-contacto" href="https://wa.me/542634670547">
            <span><FontAwesomeIcon color="#ffffff" className="fa-shake " icon={faWhatsapp} /></span>
            <div className="tarjeta-contacto-titulo">
              <h4>Whatsapp:</h4>
            </div>
            <p>Enviar mensaje a WhatsApp</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="seccion-contacto-sub"
        >
          <a className="tarjeta-contacto" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tomasvil2125@gmail.com">
            <span><FontAwesomeIcon color="#ffffff" className="fa-beat " icon={faEnvelope} /></span>
            <div className="tarjeta-contacto-titulo">
              <h4>Gmail:</h4>
            </div>
            <p>Enviar mensaje a gmail</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="seccion-contacto-sub"
        >
          <div onClick={() => copyToClipboard('Vilt#4261')} className="tarjeta-contacto">
            <span><FontAwesomeIcon className="fa-flip " icon={faDiscord} /></span>
            <div className="tarjeta-contacto-titulo">
              <h4>Discord:</h4>
            </div>
            <p>Vilt#4261</p>
          </div>
        </motion.div>

      </div>
    </>
  )
}

export default Contacto;
