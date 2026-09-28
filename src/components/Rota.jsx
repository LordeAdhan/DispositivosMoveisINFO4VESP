import React from "react";
import Base from "./Base";
import Calc2 from "./Calc2";
import Calc3 from "./Calc3";

export default function Rota(props){
    

    if(props.telaAtual == "base"){
        return <Base/>
    }else if(props.telaAtual == "Calc2"){
        return <Calc2/>
    } else if(props.telaAtual == "Calc3"){
        return <Calc3/>
    }
}