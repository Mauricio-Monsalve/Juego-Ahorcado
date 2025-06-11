import { createContext, useRef, useState } from 'react';
import GanarPerder from '../Components/GanarPerder';

export const ConfigContext = createContext();

function ConfigContextComponent({ children }) {

  const [palabra, setPalabra] = useState("");
  const [letras, setLetras] = useState("");

  const [banco, setBanco] = useState(0);
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
    <ConfigContext.Provider value={{palabra, setPalabra, letras, setLetras, banco, setBanco, chairHandler}}>
      {children}
      <GanarPerder/>
      <audio ref={refAudio} src="/sounds/bone.mp3"></audio>
    </ConfigContext.Provider>
  )
}

export default ConfigContextComponent