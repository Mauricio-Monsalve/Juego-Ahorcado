import { useRef, useState } from "react";
import "../Styles/Ahorcado.css";

function Ahorcado() {
  const [banco, setBanco] = useState(0);
  const refBanco = useRef();
  const refAudio = useRef();

  const chairHandler = () => {
    if(banco < 36) {
      setBanco(banco + 4);
    }
    if(banco >= 32){
      refAudio.current.currentTime = 0.7;
      refAudio.current.play();
    }
  }

  return (
    <>
      <div className="Ahorcado">
        <div className="Personaje">
          <div className="Foto"></div>
          <img ref={refBanco}
            style={{right: `calc(20% + ${banco}%)`}}
            className="Banco"
            src="/images/chair.png"
            alt="Banco" />
        </div>
        <audio ref={refAudio} src="/sounds/bone.mp3"></audio>
      </div>
      {/* <button onClick={chairHandler}>Rodar {banco}</button> */}
    </>
  )
}

export default Ahorcado