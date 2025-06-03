import { useEffect, useState } from "react"
import Tecla from "./Tecla.jsx";
import "./Teclado.css";

const estilo = {
  div: { width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" },
  span: { backgroundColor: "gray", padding: "10px", borderRadius: "10px", color: "black", minHeight: "24px", width: "100%", maxWidth: "480px" }
}

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Teclado() {

  const [palabra, setPalabra] = useState("");

  useEffect(
    () => {
      setTimeout(() => {
        document.querySelector("span").style.backgroundColor = "red";
        setTimeout(() => {
          document.querySelector("span").style.backgroundColor = "gray";
        }, 100);
      }, 1);

      return () => {
        console.log("bye");
      };
    },
    [palabra]
  );


  const textHandler = (letra) => {
    const consulta = /[a-zA-Z]/.test(letra);
    if (!consulta) {
      const longitud = palabra.length;
      const ultimoBorrado = palabra.slice(0, longitud - 1)
      setPalabra(ultimoBorrado);
      return;
    }
    setPalabra(palabra + letra);
  }
  return (
    <div style={estilo.div}>
      <span style={estilo.span}>{palabra}</span>

      <div className="ordenar">
        {letras.map((letra, posicion) => {
          return <Tecla tecleo={textHandler} key={posicion}>{letra}</Tecla>
        })}
        <Tecla tecleo={textHandler}>&#9003;</Tecla>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Teclado