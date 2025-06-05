import { useEffect } from "react";
import "../Styles/WordContainer.css";
import Teclado from "./Teclado.jsx";
import Word from "./Word.jsx";

function WordContainer({configApp}) {

  return (
    <div className="WordContainer">
      <Word configWordContainer={configApp}/>
      <Teclado/>
    </div>
  )
}

export default WordContainer