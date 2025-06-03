import "../Styles/WordContainer.css";
import Teclado from "./Teclado.jsx";
import Word from "./Word.jsx";

function WordContainer() {
  return (
    <div className="WordContainer">
      <Word/>
      <Teclado/>
    </div>
  )
}

export default WordContainer