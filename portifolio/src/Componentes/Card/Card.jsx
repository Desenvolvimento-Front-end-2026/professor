import { useState } from 'react';
import './Card.css';

const Card = ( {titulo} )=>{

    // const [setas, setSetas] = useState("▼")
    //▲▼
    const [aberto, setAberto] = useState(false);

    return(
        <div className="card">
            <div className="cardTitulo">
               <span> {titulo}</span>
                
                <span className={`arrow ${aberto ? 'arrowOpen' : ''}`}
                onClick={() => setAberto(!aberto)}>
                ▼
                </span>
                
            </div>

            <div className={`cardCorpo ${aberto ? 'cardCorpoOpen' : 'cardCorpoClose'}`} >

                teste
            </div>
        
        </div>  
    )
}

export default Card;