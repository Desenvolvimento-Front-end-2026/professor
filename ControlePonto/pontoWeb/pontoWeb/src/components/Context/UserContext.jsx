import { createContext, useContext, useState } from "react";


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

    let userList = [
        {nome: "Zezin da Silva", login: "ze", senha: "123", role:"USER"},
        {nome: "Pedrin Augusto", login: "ped", senha: "123", role:"USER"},
        {nome: "Gustin Carrara", login: "gugu", senha: "123", role:"ADMIN"},
        {nome: "Admin", login: "aa", senha: "abc", role:"ADMIN"},
    ]
''
    const [userLogado, setUserLogado] = useState(()=>{
         const login = decryptData(localStorage.getItem("logado")) 
        console.log("logado :: ",login, localStorage.getItem("logado"))
        if (!login){
            return null
        }else{
            return userList.filter( u => u.login === login)[0]
        }
    });
    const versao = "1.0.0"

    const login = (login, senha) =>{
        const user = userList.filter( u => u.login === login && u.senha === senha) 

        //console.log("Login::",user)
        if (user.length > 0){
            // localStorage.setItem("logado", JSON.stringify(user[0]) )
            localStorage.setItem("logado",  encryptData(user[0].login)  )
            setUserLogado(user[0])
        }else{
            setUserLogado(null)
        }
    }

    const logout = () =>{
        setUserLogado(null)
    }

    return <AuthContext.Provider value={{versao, userLogado, login, logout}}>
        {children}
    </AuthContext.Provider>

}

export {AuthProvider, UserAuth}