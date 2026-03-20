import { useState } from "react"


const Contador = ( {inferior, superior=50} )=>{

    const [count, mudaCount] = useState(0)
    const [step, mudaStep] = useState(1)
    const dv ={
        'background-color': count <= 0 ? "#f6e30e":"#ee1313",
        'margin': 10,
        'padding': 10,
    }
    const inp = {
        'width': 35,
        'height': 45,
        'margin': 6
    }

    //let count = 15;
    const mais = ()=>{
        if ((count+step) < superior){
            mudaCount( count +step )
            console.log(count)
        }
    }
    const menos = ()=>{
        if ((count-step) > inferior){
            mudaCount( count -step)
        }
    }

    return(
        <div style={dv}>
            <h1>{count}</h1>
            <div>
                <button onClick={mais}  >+</button>
                <input style={inp} value={step} 
                type="number" 
                onChange={(e)=>mudaStep( parseInt(e.target.value) )} />
                <button onClick={menos}>-</button>
            </div>
            <button onClick={()=> mudaCount(0)}>Zerar</button>
        </div>
    )
}

export default Contador