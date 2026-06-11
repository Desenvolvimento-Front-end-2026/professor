const URL = `${import.meta.env.VITE_BASE_API_URL}/cargo`


const getCargoSize = async () => {
    try {
        const resp = await fetch(URL)
        const data = await resp.json()
        return data.length
    } catch (e) {
        return 0
    }
}

const getCargo = async (idCargo) => {
    try {
        const resp = await fetch(`${URL}/${idCargo}`)
        const data = await resp.json()
        return data.nome
    } catch (e) {
        return ""
    }
}

export {getCargoSize, getCargo}
