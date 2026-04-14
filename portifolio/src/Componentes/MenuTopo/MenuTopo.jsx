import { NavLink, useNavigate } from "react-router"
import "./MenuTopo.css"
import { useEffect, useState } from "react"

const MenuTopo = () =>{

    const navigate = useNavigate()
    // const [logado, setLogado] = useState(false)

    // useEffect(()=>{
    //     setLogado( localStorage.getItem("logado") === "true" )
    // }, [])

    const logado = localStorage.getItem("logado") === "true"
    const role = localStorage.getItem("ROLE")

    

    const callSobre = () =>{
        navigate("/sobre")
    }
    const callSair = () =>{
        localStorage.removeItem("logado")
        localStorage.removeItem("nome")
        localStorage.removeItem("ROLE")
        navigate("/login")
    }

    return(
        <div className="menuTopo">

            <ul>
                <li><NavLink to="/">Portifolio</NavLink></li>
                 { logado === false && 
                    <li><NavLink to="/login">Login</NavLink></li> 
                 }
                <li><a onClick={callSobre}>Sobre</a></li>

                { (logado === true && role === "ADMIN") && 
                 <li><NavLink to="/admin">Admin</NavLink></li>
                }

                { (logado === true && role === "USER") && 
                 <li><NavLink to="/config">Configurações</NavLink></li>
                }            

                { logado === true &&                     
                    <li><NavLink to="/dash">DashBoard</NavLink></li>
                 }
                { logado === true &&          
                    <li><a onClick={callSair}>Sair</a></li>
                 }
            </ul>
        </div>
    )
}

export default MenuTopo