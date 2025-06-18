import { createContext, useReducer, useRef, useState } from 'react';
import GanarPerder from '../Components/GanarPerder';

export const ConfigContext = createContext();

const menuViewInicial = {
  vistaActual: 0,
  nuevoJuego: true, //vista 0
  nuevaFrase: false, //vista 1
  pausa: false //vista 2
};

function menuViewHandler(estado, accion) {

  const nuevoEstado = {...estado};

  switch (accion) {
    case 0:
      nuevoEstado.vistaActual = 0;
      nuevoEstado.nuevoJuego = true;
      nuevoEstado.nuevaFrase = false;
      nuevoEstado.pausa = false;
      return nuevoEstado;
    case 1:
      nuevoEstado.vistaActual = 1;
      nuevoEstado.nuevoJuego = false;
      nuevoEstado.nuevaFrase = true;
      nuevoEstado.pausa = false;
      return nuevoEstado;
    case 2:
      nuevoEstado.vistaActual = 2;
      nuevoEstado.nuevoJuego = false;
      nuevoEstado.nuevaFrase = false;
      nuevoEstado.pausa = true;
      return nuevoEstado;
    case 3:
      nuevoEstado.vistaActual = 2;
      nuevoEstado.nuevoJuego = false;
      nuevoEstado.nuevaFrase = false;
      nuevoEstado.pausa = true;
      return nuevoEstado;
    default:
      return nuevoEstado;
  }
}

function ConfigContextComponent({ children }) {

  const [menuView, setMenuView] = useReducer(menuViewHandler, menuViewInicial);
  const [menu, setMenu] = useState(true);

  const [palabra, setPalabra] = useState("");
  const [letras, setLetras] = useState("");

  const [estado, setEstado] = useState("");
  
  const [banco, setBanco] = useState(0);
  const refAudio = useRef();

  const chairHandler = () => {
    if(banco < 36) {
      setBanco(banco + 4);
    }
    if(banco >= 32){
      refAudio.current.currentTime = 0.7;
      refAudio.current.play();
      setEstado("perdiste");
    }
  }

  return (
    <ConfigContext.Provider value={{palabra, setPalabra, letras, setLetras, banco, setBanco, chairHandler, menuView, setMenuView, setEstado, menu, setMenu}}>
      {children}
      {estado && <GanarPerder estado={estado}/>}
      <audio ref={refAudio} src="/sounds/bone.mp3"></audio>
    </ConfigContext.Provider>
  )
}

export default ConfigContextComponent