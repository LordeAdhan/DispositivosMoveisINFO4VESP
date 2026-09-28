import React from "react";
import Rota from "./components/Rota";
import "./index.css"
export default function App() {
  const [telaAtual, setTelaAtual] = React.useState("base");

  return (
    <div className="main">
      <div style={estilos.titulo}>
        <h1>Calculadoras</h1>
      </div>
      <div className="troca" style={estilos.troca}>
        <button onClick={() => { setTelaAtual("base") }}>Calculadora Basica</button>
        <button onClick={() => { setTelaAtual("Calc2") }}>Calc 2</button>
        <button onClick={() => { setTelaAtual("Calc3") }}>Calc 3</button>
      </div>
      <Rota telaAtual={telaAtual}></Rota>
      
    </div>
  )
};

const estilos = {
  titulo: {
    color: "white",
    textAlign: "center"
  },
  troca:{
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    padding: "10px",

  }
}