import React from "react";

export default function Base() {
    const [num1, setNum1] = React.useState();
    const [num2, setNum2] = React.useState();
    const [result, setResult] = React.useState(0);
    
    function soma(){
        let n1 = Number(num1);
        let n2 = Number(num2);
        setResult(n1+n2);
        console.log(result)
    }
    function subtracao(){
        let n1 = Number(num1);
        let n2 = Number(num2);
        setResult(n1-n2);
        console.log(result)
    }
    function multiplicacao(){
        let n1 = Number(num1);
        let n2 = Number(num2);
        setResult(n1*n2);
        console.log(result)
    }
    function divisao(){
        let n1 = Number(num1);
        let n2 = Number(num2);
        setResult(n1/n2);
        console.log(result)
    }


    return (
        <div className="base">
            <div>
                <h1>Calc Basica</h1>
                <div className="num1">
                    <label htmlFor="n1">Numero 1</label> 
                    <input value={num1} type="number" onChange={(ev)=>{setNum1(ev.target.value)}} name="n1" id="n1" />

                </div>
                <div className="num2">
                    <label htmlFor="n2">Numero 2</label>
                    <input value={num2} onChange={(ev)=>{setNum2(ev.target.value)}}type="number" name="n2" id="n2" />
                </div>
                
                <div className="btns">
                    <button className="btn" onClick={soma}id="suma">Soma</button>
                    <button className="btn" onClick={subtracao}id="diminuindo">Subtração</button>
                    <button className="btn" onClick={multiplicacao}id="vezes">Multiplicação</button>
                    <button className="btn" onClick={divisao}id="divisao">Divisão</button>
                </div>
                <div className="resultado">
                    <p>Resultado: {result}</p>
                </div>
            </div>
        </div>
    )
}
