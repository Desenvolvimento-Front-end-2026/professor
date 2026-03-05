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

  return (
    <>
     <div>
      <h1>Olá Mundo, {vNome} - {vMaior}</h1>
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
