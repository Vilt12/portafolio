import "./contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
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

    // Opcional: Restablecer el estado después de unos segundos
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


          <div onClick={() => copyToClipboard('https://www.instagram.com/tom.exe2/')} className="tarjeta-contacto">
            <span><FontAwesomeIcon  className="fa-fade " icon={faInstagram} /></span>
          <div  className="tarjeta-contacto-titulo">
             <h4>Instagram:</h4>
          </div>
          
           
            <h4>https://www.instagram.com/tom.exe2/</h4>
         
          </div>
          </div>
          <div className="seccion-contacto-sub">

       
<div onClick={() => copyToClipboard('tomasvil2125@gmail.com')}className="tarjeta-contacto">
  
<span><FontAwesomeIcon  className="fa-beat " icon={faEnvelope} /></span>
<div   className="tarjeta-contacto-titulo">
  <h4>Gmail:</h4>
</div>


<h4>tomasvil2125@gmail.com</h4>

</div>
</div>
<div  className="seccion-contacto-sub">

       
<div onClick={() => copyToClipboard('263-467-0547')} className="tarjeta-contacto">
  
<span><FontAwesomeIcon  className="fa-shake " icon={faPhone} /></span>
<div   className="tarjeta-contacto-titulo">
  
  <h4>Telefono:</h4>

  </div>
<h4>263-467-0547</h4>

</div>
</div>

<div className="seccion-contacto-sub">

       
<div onClick={() => copyToClipboard('Vilt#4261')}  className="tarjeta-contacto">
  
<span><FontAwesomeIcon  className="fa-flip  " icon={faDiscord} /></span>
<div  className="tarjeta-contacto-titulo">
  
  <h4>Discord:</h4>

  </div>
<h4>Vilt#4261</h4>

</div>
</div>



        </div>   
   
       
        
        </>
    )
}
export default Contacto