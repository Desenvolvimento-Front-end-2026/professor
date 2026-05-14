
const URL = "http://localhost:3001/ponto"


const registraPonto = async (idUser, token) => {
    try {
/*
        idRegistro
        idUser: 1
        dataEntrada: "2024-06-10T12:00:00.000Z"
        dataSaida: null
        */
        const dataAtual = new Date()
        

        const resp = await fetch(URL,{ method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body:JSON.stringify({
                "idUser": idUser,
                "dataEntrada": dataAtual.toISOString(),
                "dataSaida": null
            }) 
        })

        return true
    } catch (e) {
        return false
    }
}

const temResgistroAberto = async (idUser, token) => {


    const resp = await fetch(URL, {method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
    })
    const registros = await resp.json()

    const userRegistro = registros.filter( reg => reg.idUser === idUser && reg.dataSaida === null)

    return userRegistro.length == 0 ? null : userRegistro[0]

}


const fechaPonto = async (idRegistro, token) => {
    try {
        const dataAtual = new Date()
        

        const resp = await fetch(`${URL}/${idRegistro}`,{ method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body:JSON.stringify({
                "dataSaida": dataAtual.toISOString()
            }) 
        })

        return true
    } catch (e) {
        return false
    }
}


const totalDiasTrabalhados = async (idUser, token) => {


    const resp = await fetch(URL, {method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
    })
    const registros = await resp.json()

    const userRegistro = registros.filter( reg => reg.idUser === idUser && reg.dataSaida != null)

    return userRegistro.length

}

const totalHorasTrabalhadas = async (idUser, token) => {


    const resp = await fetch(URL, {method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
    })
    const registros = await resp.json()

    const userRegistro = registros.filter( reg => reg.idUser === idUser && reg.dataSaida != null)

    let totalHoras = 0
    userRegistro.forEach( reg =>{
        totalHoras += (new Date(reg.dataSaida) - new Date(reg.dataEntrada)) / (1000*60)
        console.log("Horas :: ", totalHoras, "Entrada :: ",reg.dataEntrada, "Saida :: ", reg.dataSaida)

    })

    return totalHoras

}

export {registraPonto, temResgistroAberto, 
    fechaPonto, totalDiasTrabalhados, totalHorasTrabalhadas}
