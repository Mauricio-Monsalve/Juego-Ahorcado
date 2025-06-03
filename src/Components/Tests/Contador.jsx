import { useState } from "react"


const estilo = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  alignItems: "center",
  flexDirection: "column"
}


function Contador() {

  const [contador, setContador] = useState(0);

  const handlerSumar = ()=> setContador(contador+1);
  const handlerRestar = ()=> setContador(contador-1);

  return (
    <div style={estilo}>
      <span>{contador}</span>
      <button onClick={handlerSumar}>Sumar</button>
      <button onClick={handlerRestar}>Restar</button>
    </div>
  )
}

export default Contador