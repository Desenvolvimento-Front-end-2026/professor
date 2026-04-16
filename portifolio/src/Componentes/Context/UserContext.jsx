import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

const UserAuth = ()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) =>{
    let userList = [
        {nome: "Zezin da Silva", login: "ze", senha: "123", role:"USER"},
        {nome: "Pedrin Augusto", login: "ped", senha: "123", role:"USER"},
        {nome: "Gustin Carrara", login: "gugu", senha: "123", role:"ADMIN"},
    ]

    const [userLogado, setUserLogado] = useState(null);
    const versao = "1.0.0"

    const login = (login, senha) =>{
        const user = userList.filter( u => u.login === login && u.senha === senha) 

        //console.log("Login::",user)
        if (user.length > 0){
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