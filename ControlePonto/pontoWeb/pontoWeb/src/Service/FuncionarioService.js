
const URL = "http://localhost:3001/funcionario"


const getFuncionariosSize = async () => {
    console.log("Buscando funcionários...")
    try {
        const resp = await fetch(URL)
        const data = await resp.json()
        //console.log(data)
        return data.length
    } catch (e) {
        //console.error("Erro ao buscar funcionários: ", e)
        return 0
    }
}

const verifyLoginAndSenha = async (login, senha)=>{

    const resp = await fetch(URL)
    const data = await resp.json()
    //console.log(data)

    const user = data.filter( u => u.login === login && u.senha === senha)
    //console.log(user)

    if (user.length >= 1){
        const u = {"token": "sdfsdfsdfsdfSDFsdFsdfSDfSDfsdF", ...user[0]}
        return u
    }

    return null
}

export {getFuncionariosSize, verifyLoginAndSenha}
