// traemos el reemplazo de id
import { useRef } from "react";
// estilos
import "../Styles/Tecla.css";

//creamos un componente que recibe 'tecleo' y debe tener hijos
function Tecla({children, tecleo}) {

  // creamos una referencia a un boton
  const refBoton = useRef();

  // funcion que llamaremos dentro del componente
  const manejadorBoton = () => {
    // llamamos al prop 'tecleo' y le mandamos como parametro los hijos
    tecleo(children);
    // desactivamos el boton
    refBoton.current.setAttribute("disabled",true);
  }

  // const manejadorHover = () => {
  //   refBoton.current.style.backgroundColor = "rgb(0,180,0)"
  // }
  // const manejadorExit = () => {
  //   refBoton.current.style.backgroundColor = "green"
  // }

  return (
    <button type="button"
    ref={refBoton}
    className="Tecla"
    style={{
      gridArea: children.toLowerCase()
    }}
    onClick={manejadorBoton}
    // onMouseEnter={manejadorHover}
    // onMouseLeave={manejadorExit}
    >
      {children}
    </button>
  )
}

export default Tecla