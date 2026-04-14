import { useState } from "react"
import { useNavigate } from "react-router"


const LoginPage = () =>{
    const [login, setLogin]= useState("")
    const [senha, setSenha]= useState("")
    const [msg, setMsg]= useState("")
    const navigate = useNavigate()

    const estilo = {
        textAlign: "center",
        paddingTop: "50px",
    }

    const HandleLogin = () =>{
        if ( login === "admin" && senha === "123"){
            //setMsg("Ok acertrou")
            localStorage.setItem("logado", "true")
            localStorage.setItem("nome", "Pedrin Admin")
            localStorage.setItem("ROLE", "ADMIN")
            navigate("/")
        }else if ( login === "user" && senha === "123"){
            localStorage.setItem("logado", "true")
            localStorage.setItem("nome", "Zezin da Silva")
            localStorage.setItem("ROLE", "USER")
            navigate("/")
        }else {
            setLogin("")
            setSenha("")
            setMsg("Login ou senha incorretos")
        }
    }

    return(
        <div style={estilo}>
            <h1>LOGIN</h1>
            <div>
                <label>login</label>
                <input type="text" value={login}
                onChange={(e)=> setLogin(e.target.value)} />
            </div>
            <div>
                <label>senha</label>
                <input type="password" value={senha}
                onChange={(e)=> setSenha(e.target.value)} />
            </div>
            <div>
                {msg && <p>{msg}</p>}
                <button onClick={HandleLogin}>Logar</button>
            </div>
        </div>
        

    )
}

export default LoginPage