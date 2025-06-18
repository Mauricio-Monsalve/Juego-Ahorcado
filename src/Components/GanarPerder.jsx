import { useContext, useEffect, useRef, useState } from "react";
import "../Styles/GanarPerder.css";
import { ConfigContext } from "../Contexts/ConfigContext";

function GanarPerder({estado}) {

  const refDiv = useRef();
  const {setBanco, setMenuView, setMenu, setPalabra, setLetras, setEstado} = useContext(ConfigContext);

  useEffect(()=>{
    refDiv.current.classList.add("animar-fondo");
  },[]);

  const resetHandler = () => {
    setBanco(0);
    setMenuView(1);
    setMenu(true);
    setPalabra("");
    setLetras("");
    animarLuz();
  };
  
  const exitHandler = () => {
    setBanco(0);
    setMenuView(0);
    setMenu(true);
    setPalabra("");
    setLetras("");
    animarLuz();
  };
  
  const animarLuz = () => {
    refDiv.current.classList.add("iluminar-fondo");
    refDiv.current.classList.remove("animar-fondo");
    setTimeout(() => {
      refDiv.current.classList.remove("iluminar-fondo");
      setEstado("");
    }, 2000);
  };

  //ganaste
  //perdiste
  return (
    <div className="GanarPerder" ref={refDiv}>

        <div className="anim-word">
          {estado == "ganaste" && <span className="ganar">Fuiste s<b>A</b>lvado</span>}
          {estado == "perdiste" && <span className="perder">Fuiste <b>A</b>horcado</span>}
        </div>
        <div className="btns">
          <button type="button" onClick={resetHandler}>Reiniciar</button>
          <button type="button" onClick={exitHandler}>Salir</button>
        </div>

    </div>
  )
}

export default GanarPerder