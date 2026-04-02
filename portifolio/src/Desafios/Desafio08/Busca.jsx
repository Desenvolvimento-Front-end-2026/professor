import { useState } from "react";


const Busca = ( {aoMudar})=>{
const estilo = {
        width: "100%",
        border: "1px solid red",
        backgroundColor: "yellow",   }

    const [cpBusca, setCpBusca] = useState("")    

    const buscaHandle = (e) =>{
        setCpBusca(e.target.value)
        console.log(cpBusca)
        aoMudar(e.target.value)

    }

    return(
        <>
        <input style={estilo} 
        type="text" placeholder="Digite sua busca..." 
        value={cpBusca} 
        onChange={ buscaHandle } />
        </>
    )
}

export default Busca;