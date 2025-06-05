import { useState } from "react";
import "../Styles/App.css";
import Ahorcado from "./Ahorcado.jsx";
import Config from "./Config.jsx";
import WordContainer from "./WordContainer.jsx";

function App() {

  const [caseConfig, setCaseConfig] = useState("");

  return (
    <div className="App">
      <Ahorcado/>
      <WordContainer configApp={caseConfig}/>
      <Config mensajero={setCaseConfig}/>
    </div>
  )
}

export default App