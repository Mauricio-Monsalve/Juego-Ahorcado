import { useContext, useRef } from "react";
import "../Styles/Menu.css";
import { ConfigContext } from "../Contexts/ConfigContext";

function Menu() {

  const {menu, setMenu} = useContext(ConfigContext);

  const {setPalabra, setBanco, setLetras, menuView, setMenuView} = useContext(ConfigContext);

  const refFrase = useRef();

  const fraseHandler = (e) => {
    e.preventDefault();
    if (refFrase.current.value.trim() == "") {
      return alert("Debes llenar este campo");
    }
    if (!/[a-zA-Z]/.test(refFrase.current.value)) {
      return alert("Debes llenar este campo");
    }
    
    const frase = refFrase.current.value.trim().replaceAll("<","&#60;").replaceAll(">","&#62;");

    setBanco(0);
    setMenuView(2);
    setMenu(false);
    setPalabra(frase);
  }


  //original = "hola++"
  //filtrado con regex = "hola"
  // if(original.length > filtrado.length) {
  //  error
  //  si el filtro tiene menos, es porque habia simbolos que no son letras, por lo tanto, doy error
  //}

  const salirHandler = () => {
    const confirmar = confirm("¿Seguro que deseas salir del juego?");
    if(confirmar) {
      setBanco(0);
      setPalabra("");
      setLetras("");
      setMenuView(0);
    }
  }

  const reiniciarHandler = () => {
    const confirmar = confirm("¿Seguro que deseas reiniciar del juego?");
    if(confirmar) {
      setBanco(0);
      setPalabra("");
      setLetras("");
      setMenuView(1);
    }
  }


  return (
    <div className="Menu"
    style={{
        backgroundColor: menu? "rgba(255, 255, 255, 0.7)" : "transparent",
        backdropFilter: `blur(${menu?5:0}px)`,
        width: `${menu?100:0}%`,
        height: `${menu?100:0}%`
      }}>

      {menuView.pausa && !menu &&
      <img src="/Juego-Ahorcado/icons/menu.svg" alt="Menu" onClick={()=>setMenu(!menu)} />}

      {menu && <>
      <p>El <span>A</span>horcado</p>

      {menuView.nuevoJuego &&
      <button type="button"
        onClick={()=>setMenuView(1)}>
          Nuevo juego
      </button>}

      {menuView.nuevaFrase && <form onSubmit={fraseHandler}>
        <textarea placeholder="Frase secreta" ref={refFrase} required></textarea>
        <div className="separador">
          <button type="button" onClick={()=>setMenuView(0)}>Cancelar</button>
          <button type="submit">Empezar</button>
        </div>
      </form>}
      
      {menuView.pausa && <>
        <button type="button" onClick={()=>setMenu(!menu)}>Continuar</button>
        <button type="button" onClick={reiniciarHandler}>Reiniciar</button>
        <button type="button" onClick={salirHandler}>Salir</button>
      </>}

      </>}

    </div>
  )
}

export default Menu