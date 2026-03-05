import { version } from 'react'
import './App.css'

function App() {
  console.log("OI")
  let vNome = "Daves Martins"
  const vMaior = 18
  vNome = "Zezin da Silva"
  let vAlunos = [
    "Daves Martins", 
    "Zezin da Silva",
    "Pedrin Joze",
    "Gustin"
  ]

  let vAlunos2 = [
    {id: 1, nome: "PEdrin", nota: 8},
    {id: 2, nome: "JEfin", nota: 9},
    {id: 3, nome: "Zezin", nota: 4}
  ]

  vAlunos2.push({id: 4, nome: "Marquin", nota: 6})

  let vAlunosAprovados = vAlunos2.filter( (aluno, idx)=> aluno.nota >= 6 )

  let alu = {id: 3, nome: "Gustin", nota: 10, 
    disciplina: [ {nome: "matematica", prof:"Martin"},
                  {nome: "Quimica", prof:"Isa"}
    ]}

  console.log(alu.disciplina[0].nome)
  console.log(alu.nome)

  console.log(vAlunos2[0])
  console.log(vAlunos2[0].nome)
  console.log(vAlunos2[0].nota)


  // function x(){
  //   return "OLÁ"
  // }

  // function print(valor, indice){
  //   console.log(`Olá ${valor} seu indice é ${indice}`)
  // }
  // print("abc", "10")
  // vAlunos.forEach( print )

  // let a = (valor, indice) =>
  //     console.log(`Função A:: Olá ${valor} seu indice é ${indice}`)

  // a("dssdf","dsdsfds")

  // vAlunos.forEach( a )

  // vAlunos.forEach( (v, i)=>
  //   console.log(`Função Anônima:: Olá ${v} seu indice é ${i}`)
  // )

  let imprimir = (mensagem)=>{
      // let nome = mensagem.nome
      // let idade = mensagem.idade

      let {nome, idade} = mensagem
      let msg1 = {peso: 50, mensagem}
      let msg2 = {peso: 50, ...mensagem}
      console.log(nome, idade)
      console.log(msg1)
      console.log(msg2)
  }

 // imprimir("Daves MArtins")
  imprimir( {nome: "Daves", idade: 18} )


  return (
    <>
     <div>
      <h1>Olá Mundo, {vNome} - {vMaior}</h1>
    <h2>Lista de Alunos 2</h2>
    <ul>
      {vAlunos2.map(  (aluno, idx) => <li>{aluno.nome} - nota {aluno.nota}</li> )}
      {/* <li>Zezin - nota 10</li>
      <li>Mariazinha - nota 10</li> */}
    </ul>

    <h2>Lista de Alunos 2 Aprovados</h2>
  {vAlunosAprovados.map(  (aluno, idx) => <li>{aluno.nome} - nota {aluno.nota}</li> )}
     
      <h2>Lista de Alunos</h2>
      <ul>
        {vAlunos.map( (v, i) => <li>{v} - {i}</li> )}
        {/* <li>{vAlunos[0]}</li> */}
      </ul>
      <table border="2">
        {vAlunos.map( (v, i) => <tr><td> OI {v}</td></tr> )}        
      </table>
     </div>
    </>
  )
}

export default App
