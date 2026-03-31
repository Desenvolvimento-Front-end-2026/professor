

const ParImpar = ({ numero, usuario })=>{


    return(
        <>
        {(numero % 2 === 0) ? "Par" : "Impar" }
        <br />
         Olá {usuario.nome}
        {usuario.idade <= 17 &&
            <span> você é menor de Idade</span>            
        }
        {usuario.idade > 17 &&
            <span> você é maior de Idade</span>
        }
        </>
    )

}

export default ParImpar;