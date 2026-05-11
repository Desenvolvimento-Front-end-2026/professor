
const URL = "http://localhost:3001/funcionario"


const getFuncionariosSize = async () => {
    console.log("Buscando funcionários...")
    try {
        const resp = await fetch(URL)
        const data = await resp.json()
        console.log(data)
        return data.length
    } catch (e) {
        console.error("Erro ao buscar funcionários: ", e)
        return 0
    }
}

export {getFuncionariosSize}
