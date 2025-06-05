import { useEffect, useState } from "react";
import "../Styles/Word.css";

function Word({configWordContainer}) {

  const [juego, setJuego] = useState([]);
  const [letras, setLetras] = useState("abcdefghijklmnopqrstuvwxyz");
  const [palabra, setPalabra] = useState("SuperCaliFragiListico");

  useEffect(()=>{
    const estructura = palabra.split("").map((letra)=>{
      return {
        letra: letra,
        conseguida: !(/[a-zA-Z]/.test(letra)) ||  letras.toLowerCase().includes(letra.toLowerCase())
      };
    });
    setJuego(estructura);
    console.log(configWordContainer);
  },[configWordContainer]);

  return (
    <ol className="Word"
      style={{
        textTransform:
          configWordContainer == "AA"? "uppercase"
          : configWordContainer == "aa" ? "lowercase"
          : "none"
      }}
    >
      {juego.map((obj, index)=>{
        return (
          /[a-zA-Z]/.test(obj.letra) ?
            <li key={index}>
              {obj.conseguida? obj.letra : "\u00A0"}
            </li>
          :
            obj.letra == " "?
              "\u00A0\u00A0\u00A0\u00A0"
            :
              <li key={index} style={{border: "none"}}>
                {obj.letra}
              </li>
        );
      })}
    </ol>
  )
}

export default Word