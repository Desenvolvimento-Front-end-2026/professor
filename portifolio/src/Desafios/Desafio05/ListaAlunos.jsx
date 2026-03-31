

const ListaAlunos = ()=>{

    let alunos = [
        {nome: 'Zezin', nota: 6.0},
        {nome: 'Pedrin', nota: 3.8},
        {nome: 'Bia', nota: 8.2},
        {nome: 'Ana', nota: 10.0},
        {nome: 'Carlos', nota: 9.5},
        {nome: 'Kin', nota: 1.3},
    ]


    return (
        <div style={{margin: '10px'}}>
            <ul style={{listStyle: 'none'}}>
                {alunos.map( ( aluno, idx)=>
                    <li key={idx}>{idx+1}) {aluno.nome} - {aluno.nota}</li>
                  )}
                {/* <li>teste nota 1.1</li>
                <li>teste nota 1.1</li> */}
            </ul>
        </div>
    )
}

export default ListaAlunos;