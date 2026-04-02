import { useState } from "react"
import Busca from "./Busca"
import Listagem from "./Listagem"


const Pesquisa = ({titulo}) =>{

    const produtos = [
        "Lápis",
        "Caneta",
        "Borrcha",
        "Caderno"
    ]

    const [search, setSearch] = useState("")
    
    return (
        <div>
            <div>{titulo} - {search}</div>

            <Busca aoMudar={setSearch} />
            <Listagem produtos={produtos} filtro={search} />

        </div>
    )

}

export default Pesquisa