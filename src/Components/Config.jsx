import { useEffect, useReducer, useState } from "react";
import "../Styles/Config.css";

function configHandler(estadoAnterior, accion) {

  const estado = { ...estadoAnterior };

  if (accion == "menu") {
    estado.menu = !estado.menu
    estado.case = false
  }
  if (accion == "case") {
    estado.case = !estado.case
  }
  return estado
}

function capitalHandler(estadoAnterior, accion) {

  const estado = { ...estadoAnterior };

  if (accion == "Mayus") {
    estado.liAA = true;
    estado.liAa = false;
    estado.liaa = false;
    estado.valor = "AA"
  }
  if (accion == "None") {
    estado.liAA = false;
    estado.liAa = true;
    estado.liaa = false;
    estado.valor = "Aa"
  }
  if (accion == "Minus") {
    estado.liAA = false;
    estado.liAa = false;
    estado.liaa = true;
    estado.valor = "aa"
  }

  return estado;
}

function Config({mensajero}) {

  const [config, setConfig] = useReducer(configHandler, { menu: false, case: false });

  const [capital, setCapital] = useReducer(capitalHandler, { valor: "Aa", liAA: false, liAa: true, liaa: false });

  useEffect(()=>{
    mensajero( capital.valor );
  },[capital]);

  return (
    <div className="Config">
      <img src="/icons/config.svg"
        alt="Configuracion"
        onClick={() => setConfig("menu")}
        style={{ transform: `rotate(${config.menu ? "90" : "0"}deg)` }}
      />
      <div className="bubble"
        style={{ transform: `translateX(${config.menu ? "0" : "110"}%)` }}
      >
        <div className="case-type">
          <span onClick={() => setConfig("case")}>Case: </span>
          <ul style={{ overflow: config.case ? "visible" : "hidden" }}>
            <li className={capital.liAA ? "selected" : ""} onClick={()=>setCapital("Mayus")}>AA</li>
            <li className={capital.liAa ? "selected" : ""} onClick={()=>setCapital("None")}>Aa</li>
            <li className={capital.liaa ? "selected" : ""} onClick={()=>setCapital("Minus")}>aa</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Config
