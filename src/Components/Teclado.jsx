import "../Styles/Teclado.css";
import Tecla from "./Tecla.jsx";

const teclas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function Teclado() {

  return (
    <div className="Teclado">
      {teclas.map((letra,index)=>{
        return <Tecla key={index}>{letra}</Tecla>
      })}
      {["sp1","sp2","sp3","sp4"].map((sp,index)=>{
        return <span style={{gridArea: sp}} key={index}></span>
      })}
    </div>
  )
}

export default Teclado