import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portifolio from './Componentes/Portifolio/Portifolio'
// import './index.css'
import "./main.css"
import Card from './Componentes/Card/Card'
import MensagemSimples from './Desafios/Desafio01/MensagemSimples'
import SituacaoAluno from './Desafios/Desafio02/SituacaoAluno'
import Aleatorio from './Desafios/Desafio03/Aleatorio'
import ListaAlunos from './Desafios/Desafio05/ListaAlunos'
import Familia from './Desafios/Desafio06/Familia'
import FamiliaMembro from './Desafios/Desafio06/FamiliaMembro'
import ParImpar from './Desafios/Desafio07/ParImpar'
import Pesquisa from './Desafios/Desafio08/Pesquisa'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Portifolio titulo="Conceitos de React">
      
      <Card titulo="Desafio 01 - Passagem de paramêtro" >
        
        <MensagemSimples mensagem="Seja Bem Vindo!" />

      </Card>

      <Card titulo="Desafio 02 - CSS e If" >

        <SituacaoAluno nome="Zezin da Silva" nota={2.8} />

      </Card>

      <Card titulo="Desafio 03 - Cálculo Aleatório">
        <Aleatorio min={50} max={60} />
      </Card>

      <Card titulo="Desafio 05 - Lista de Alunos - Repetição">
        <ListaAlunos />
      </Card>


      <Card titulo="Desafio 06 - Filhos - passagem de conteúdo">
        <Familia sobrenome="Martins" >
          <FamiliaMembro nome="Zezin" />
          <FamiliaMembro nome="Pedrin" />
          <FamiliaMembro nome="Bia" />
        </Familia>
      </Card>


      <Card titulo="Desafio 07 - Condicionais">
        <ParImpar numero={58} usuario={{nome: "zezin", idade: 18}} />
        <ParImpar numero={55} usuario={{nome: "pedrin", idade: 15}} />
      </Card>

      <Card titulo="Desafio 08 - Comunicação Indireta - UseState">
        <Pesquisa titulo="Pesquisa de Produtos" />
      </Card>

    </Portifolio>

  </StrictMode>,
)
