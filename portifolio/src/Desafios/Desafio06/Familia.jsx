import React from "react"


const Familia = ( {sobrenome, children}) =>{


    return(
        <div>
            <h4>Familia {sobrenome}</h4>
            {children.map( (filho, idx) =>
                 React.cloneElement(filho,{sobrenome})                          
            ) }
            {/* {children} */}
        </div>
    )

}

export default Familia