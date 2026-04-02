

const Listagem = ( {produtos, filtro} ) =>{

    const estilo = {
        paddingLeft: "10px",
        listStyle: "none"
    }

    const produtosFilter = produtos
        .filter((prod)=> prod.toLowerCase().indexOf(filtro.toLowerCase()) >= 0  )

    return (
        <ul style={estilo}>
            <li>Filtro: {filtro}</li>

            { produtosFilter.length >0 &&            
                produtosFilter.map( (prod, idx)=>
                    <li key={idx}>{prod}</li>
                )
            }
            { produtosFilter.length ===0 &&            
                <li style={{color: "red"}}>Nenhum produto encontrado</li>
            }
        </ul>
    )
}

export default Listagem