import "./contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { useState } from "react";



function Contacto() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Indicar al usuario que se ha copiado con éxito
    setCopied(true);

    // Restablecer el estado después de unos segundos
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Restablecer después de 2 segundos
  };

  function handleScroll() {
    const elementos = document.querySelectorAll(".seccion-contacto-sub");
    elementos.forEach((elemento) => {
      const elementoRect = elemento.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (elementoRect.top < windowHeight / 1.2) {
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
        <div className="seccion-contacto">
          <div>
            <div className="seccion-contacto-caja-titulo">
              <h2 className="seccion-contacto-titulo">
    Contacto
  </h2>
            </div>
  
  
  {copied && (
        <div className="notification">
          ¡Copiado con éxito!
        </div>
      )}
          
</div>
       
          <div className="seccion-contacto-sub">

<a className="tarjeta-contacto" href="https://www.instagram.com/tom.exe2/">
        
            <span><FontAwesomeIcon color="#ffffff"  className="fa-fade " icon={faInstagram} /></span>
          <div  className="tarjeta-contacto-titulo">
             <h4>Instagram:</h4>
          </div>
          
           
            <p>Enviar mensaje a instagram</p>
         
          </a>
          </div>
          <div  className="seccion-contacto-sub">

<a className="tarjeta-contacto" href="https://wa.me/542634670547">

<span><FontAwesomeIcon color="#ffffff"  className="fa-shake "  icon={faWhatsapp} /></span>
<div   className="tarjeta-contacto-titulo">
  
  <h4>Whatsapp:</h4>

  </div>
<p>Enviar mensaje a WhatsApp </p>

</a>
</div>
          <div className="seccion-contacto-sub">

   <a className="tarjeta-contacto" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tomasvil2125@gmail.com"> 
<span><FontAwesomeIcon color="#ffffff"  className="fa-beat " icon={faEnvelope} /></span>
<div   className="tarjeta-contacto-titulo">
  <h4>Gmail:</h4>
</div>


<p>Enviar mensaje a gmail</p>

</a>   
</div>


<div className="seccion-contacto-sub">

       
<div onClick={() => copyToClipboard('Vilt#4261')}  className="tarjeta-contacto">
  
<span><FontAwesomeIcon  className="fa-flip  " icon={faDiscord} /></span>
<div  className="tarjeta-contacto-titulo">
  
  <h4>Discord:</h4>
  </div>

<p>Vilt#4261</p>

</div>
</div>



        </div>   
   
       
        
        </>
    )
}
export default Contacto