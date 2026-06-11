const URL = `${import.meta.env.VITE_BASE_API_URL}/funcionario`
console.log(import.meta.env.VITE_BASE_API_URL) 
//"http://localhost:3001/funcionario"
//"https://pontoservice.onrender.com/funcionario"



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


const getFuncionarios = async () => {
    try {
        const resp = await fetch(URL)
        const data = await resp.json()
        return data
    } catch (e) {
        return []
    }
}

const getFuncionario = async (idFunc) => {
    try {
        const resp = await fetch(`${URL}/${idFunc}`)
        const data = await resp.json()
        return data
    } catch (e) {
        return ""
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

export {getFuncionariosSize, verifyLoginAndSenha, getFuncionario, getFuncionarios}
