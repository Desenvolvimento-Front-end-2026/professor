import { useEffect } from "react"
import { useNavigate } from "react-router"
import { UserAuth } from "../Context/UserContext"

const PrivateRoute = ( {children, role} )=>{

    const navigate = useNavigate()
    const {userLogado} = UserAuth() 
    const logado = userLogado != null //localStorage.getItem("logado") === "true"
    const roleLogado = userLogado != null? userLogado.role : null // localStorage.getItem("ROLE")
    const hasRole = role ? role === roleLogado : true
   
        // return <h1>Acesso não autoriado</h1>
        
    useEffect(()=>{
        if (!logado){
            navigate("/login")
        }
        // if (logado && !hasRole){
        //     navigate("/negado")            
        // }
    },[])    

    if (logado && hasRole){
        return children
    }
    if (logado && !hasRole){
           return <h1>Acesso não autoriado</h1>            
    }

}


export default PrivateRoute