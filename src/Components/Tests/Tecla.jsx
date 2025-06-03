const estilo = {
  centrar: {display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"},
  colores: {backgroundColor: "darkblue", border: "2px solid white", borderRadius: "5px", color: "white"}
}

function Tecla(props) {
  const manejadorBoton = () => {
    props.tecleo(props.children);
  }
  return (
    <button onClick={manejadorBoton} style={
      {
        ...estilo.centrar,
        ...estilo.colores,
        gridArea: /[a-zA-Z]/.test(props.children) ? props.children.toLowerCase() : "del"
      }
    }>{props.children}</button>
  )
}

export default Tecla