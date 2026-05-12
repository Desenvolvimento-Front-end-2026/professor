import { createContext, useContext, useState } from "react";
import { verifyLoginAndSenha } from "../../Service/FuncionarioService";
import { getCargo } from "../../Service/CargoService";


const AuthContext = createContext();

const UserAuth = ()=>{
    return useContext(AuthContext)
}


const AuthProvider = ({children}) =>{

const SECRET_KEY = "Qualquer Chave ABC"
const encryptData = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length));
    }

    return btoa(result);
}

const decryptData = (encodedText) => {
    try {
        const text = atob(encodedText);
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length));
        }
        return result;
    } catch (error) {
        return null; // Caso os dados estejam corrompidos ou alterados manualmente
    }
}


    const [userLogado, setUserLogado] = useState(null);
    const [cargoUser, setCargoUser] = useState(null);
    const versao = "1.0.0"

    const login = async (login, senha) =>{
        const user = await verifyLoginAndSenha(login, senha)
        console.log("usuário Logado :: ",user)

        if (user != null){
            // localStorage.setItem("logado", JSON.stringify(user[0]) )
            setCargoUser ( await getCargo( user.cargo ) )
            localStorage.setItem("logado",  encryptData(user.login)  )
            setUserLogado(user)
        }else{
            setUserLogado(null)
        }
    }

    const logout = () =>{
        setUserLogado(null)
    }

    return <AuthContext.Provider value={{versao, userLogado, login, logout, cargoUser}}>
        {children}
    </AuthContext.Provider>

}

export {AuthProvider, UserAuth}