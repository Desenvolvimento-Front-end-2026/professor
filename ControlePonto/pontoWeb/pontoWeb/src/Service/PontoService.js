
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


export {registraPonto}
