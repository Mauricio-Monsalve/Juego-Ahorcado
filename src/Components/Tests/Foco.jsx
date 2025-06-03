import { useRef, useState } from "react";

function Foco() {

  const [light, setLight] = useState(false);

  const referenciaFoto = useRef();
  const referenciaBoton = useRef();

  const lightHandler = () => {

    const encendido = !light;
    if(encendido){
      referenciaFoto.current.src = "/images/focoon.png";
      referenciaBoton.current.textContent = "Apagar";
    }else{
      referenciaFoto.current.src = "/images/focooff.png";
      referenciaBoton.current.textContent = "Encender";
    }

    setLight(encendido);
  };

  return (
    <div style={{display: "flex",flexDirection: "column"}}>
      <img ref={referenciaFoto} src="/images/focooff.png" alt="Foco" />
      <button ref={referenciaBoton} onClick={lightHandler}>Encender</button>
    </div>
  );
}

export default Foco