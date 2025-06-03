import { useEffect, useState } from "react";
import "../Styles/Word.css";

function Word() {

  const [juego, setJuego] = useState([]);
  const [letras, setLetras] = useState("asdwfidceor");
  const [palabra, setPalabra] = useState("Sopa de macaco");

  useEffect(()=>{
    const estructura = palabra.split("").map((letra)=>{
      return {
        letra: letra,
        conseguida: letra == " " ||  letras.includes(letra.toLowerCase())
      };
    });
    setJuego(estructura);
    console.log(estructura)
  },[]);

  return (
    <ol className="Word">
      {juego.map((obj, index)=>{
        return (
          obj.letra == " " ? "\u00A0\u00A0\u00A0\u00A0" :
          <li key={index}>
            {obj.conseguida? obj.letra : "\u00A0"}
          </li>
        );
      })}
    </ol>
  )
}

export default Word