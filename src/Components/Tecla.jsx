// traemos el reemplazo de id
import { useContext, useEffect, useRef } from "react";
// estilos
import "../Styles/Tecla.css";
import { ConfigContext } from "../Contexts/ConfigContext.jsx";

//creamos un componente que recibe 'tecleo' y debe tener hijos
function Tecla({children}) {

  const {letras, setLetras, palabra, chairHandler} = useContext(ConfigContext);

  
  // creamos una referencia a un boton
  const refBoton = useRef();
  
  useEffect(()=>{
    if(!letras) {
      refBoton.current.removeAttribute("disabled");
    }
  },[letras]);

  // funcion que llamaremos dentro del componente
  const manejadorBoton = () => {
    setLetras( letras + children )

    if(!palabra.toLowerCase().includes(String(children).toLowerCase())) {
      chairHandler();
    }

    // desactivamos el boton
    refBoton.current.setAttribute("disabled",true);
  }

  return (
    <button type="button"
    ref={refBoton}
    className="Tecla"
    style={{
      gridArea: children.toLowerCase()
    }}
    onClick={manejadorBoton}
    >
      {children}
    </button>
  )
}

export default Tecla