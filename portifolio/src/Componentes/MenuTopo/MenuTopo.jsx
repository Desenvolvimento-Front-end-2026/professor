import { NavLink, useNavigate } from "react-router"
import "./MenuTopo.css"
import { useEffect, useState } from "react"
import { UserAuth } from "../Context/UserContext"

const MenuTopo = () =>{

    const navigate = useNavigate()
    // const [logado, setLogado] = useState(false)

    // useEffect(()=>{
    //     setLogado( localStorage.getItem("logado") === "true" )
    // }, [])

    // const logado = localStorage.getItem("logado") === "true"
    // const role = localStorage.getItem("ROLE")

    const {userLogado, logout} = UserAuth()    

    const callSobre = () =>{
        navigate("/sobre")
    }
    const callSair = () =>{
        // localStorage.removeItem("logado")
        // localStorage.removeItem("nome")
        // localStorage.removeItem("ROLE")
        logout()
        navigate("/login")
    }

    return(
        <div className="menuTopo">

            <ul>
                <li><NavLink to="/">Portifolio</NavLink></li>
                 { !userLogado && 
                    <li><NavLink to="/login">Login</NavLink></li> 
                 }
                <li><a onClick={callSobre}>Sobre</a></li>

                { ( userLogado && userLogado.role === "ADMIN") && 
                 <li><NavLink to="/admin">Admin</NavLink></li>
                }

                { ( userLogado && userLogado.role === "USER") && 
                 <li><NavLink to="/config">Configurações</NavLink></li>
                }            

                { userLogado &&                     
                    <li><NavLink to="/dash">DashBoard</NavLink></li>
                 }
                { userLogado &&          
                    <li><a onClick={callSair}>Sair</a></li>
                 }
            </ul>
        </div>
    )
}

export default MenuTopo