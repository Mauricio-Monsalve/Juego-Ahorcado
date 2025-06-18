import { useContext, useRef, useState } from "react";
import "../Styles/Ahorcado.css";
import { ConfigContext } from "../Contexts/ConfigContext.jsx";

function Ahorcado() {
  
  const refBanco = useRef();
  const {banco} = useContext(ConfigContext);

  return (
    <>
      <div className="Ahorcado">
        <div className="Personaje">
          <div className="Foto"></div>
          <img ref={refBanco}
            style={{right: `calc(20% + ${banco}%)`}}
            className="Banco"
            src="/Juego-Ahorcado/images/chair.png"
            alt="Banco" />
        </div>
      </div>
      {/* <button onClick={chairHandler}>Rodar {banco}</button> */}
    </>
  )
}

export default Ahorcado