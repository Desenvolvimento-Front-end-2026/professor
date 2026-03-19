import './App.css'
import Contador from './componentes/Contador/Contador'
import Imc from './componentes/IMC/Imc'
import Pessoa from './componentes/Pessoa/Pessoa'

function App() {


  return (
    <>

    <Contador inferior={-10} superior={15} />

    <Imc titulo="Calculadora de IMC"/>

    <Pessoa nome="zezin da Silva" 
      idade="18" sexo="M" 
      cor="red" 
      peso={80} altura={1.80} >
        Daves Martins
      </Pessoa>
    <Pessoa nome="Pedrin pedroso" 
      idade="13"
      peso="25" altura="1.15" />
    <Pessoa nome="Jefin" 
      idade="32"
      peso="150" altura="1.50"
      cor="#3a3a3f" />
    <Pessoa nome="Natinhain"  
      idade="23" estilo={2}
      peso="55" altura="1.90"/>

    
      
    </>
  )
}

export default App
