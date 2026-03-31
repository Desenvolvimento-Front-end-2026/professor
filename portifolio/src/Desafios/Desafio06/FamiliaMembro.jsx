

const FamiliaMembro = ( {nome, sobrenome}) =>{


    return(
        <>
            <p>{nome} <span style={{fontWeight:'bold'}}>
                {sobrenome}</span></p>
        </>
    )

}

export default FamiliaMembro