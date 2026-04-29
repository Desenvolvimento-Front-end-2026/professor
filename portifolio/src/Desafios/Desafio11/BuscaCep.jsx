import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"


const BuscaCep = () =>{

    const [dados, setDados] = useState(null)
    const [cep, setCep] = useState("")
    const [carregando, setCarregando] = useState(false)

    const buscarCepAwait = async () =>{
        setCarregando(true)
        // const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        // const json = await res.json()
        // console.log(res, json, json.logradouro)
    }
    useEffect(()=>{
        const bc = async ()=>{
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const json = await res.json()
            console.log(res, json, json.logradouro) 
            setCarregando(false)
            setDados(json)
        }

        if (carregando){
            bc()
        }

    },[carregando])

    const buscarCep =  () =>{
        //setCarregando(true)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then( res =>{
            return res.json()
        }).then(async j =>{

            await wait(10000).then(()=>{ console.log("acabou")})

            setDados(j)
        })
        
    }

    const wait = async (ms = 2000)=>{
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div>

            <h2>Informe o CEP</h2>
            <input type="number" placeholder="cep" 
            style={{width: "120px"}}
            value={cep} 
            onChange={(e) => setCep(e.target.value)} />
            <button onClick={buscarCepAwait} >Buscar Await</button>
            <button onClick={buscarCep} >Buscar</button>

            {carregando && 
            <p>Carregando ....</p>
            }

            {dados != null &&
                <div>
                    <p>CEP: {dados.cep}</p>
                    <p>Rua: {dados.logradouro}</p>
                    <p>Bairro: {dados.bairro}</p>
                    <p>Cidade: {dados.localidade}</p>
                    <p>UF: {dados.estado}</p>
                    <p>região: {dados.regiao}</p>
                </div>
                }

        </div>
    )



}

export default BuscaCep