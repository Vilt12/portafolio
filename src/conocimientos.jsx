import "./conocimientos.css"

function Conocimientos() {
    function checkVisibility() {
        const section = document.querySelector(".seccion-conocimientos");
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
      
        if (sectionTop < windowHeight / 1.5) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      }
      window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
    return(
        <>
        <div className="seccion-conocimientos">
            <div className="seccion-conocimientos-titulo">
                 <h4>
                Mis conocimientos
            </h4>
            </div>
           <div className="seccion-conocimientos-caja-img"> 
            <div className="seccion-conocimientos-imagenes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" alt=""  height={"100px"} width={"100px"}/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt=""  height={"100px"} width={"100px"}/>
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png" alt=""  height={"100px"} width={"100px"}/>
            <img src="https://cdn-icons-png.flaticon.com/512/3488/3488408.png" alt=""  height={"100px"} width={"100px"}/>
            
          
            </div>
            <div className="seccion-conocimientos-imagenes">
                <img src="https://static-00.iconduck.com/assets.00/mongodb-original-wordmark-icon-2015x2048-n6r3kuri.png" alt=""  height={"100px"} width={"100px"}/>
                   <img src="https://www.mementotech.in/assets/images/icons/express.png" alt=""  height={"100px"} width={"100px"}/>      
                   <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt=""  height={"100px"} width={"100px"}/>
          <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt=""  height={"100px"} width={"100px"}/>
           
            
          
            </div>
           </div>
            
        </div>
        </>
    )
}
export default Conocimientos