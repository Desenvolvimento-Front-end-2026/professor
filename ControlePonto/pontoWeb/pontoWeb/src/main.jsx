import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/Context/UserContext.jsx'
import { BrowserRouter } from 'react-router'
import Rotas from './components/rotas/Rotas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

      <BrowserRouter>
      
        <Rotas />
        
      </BrowserRouter>      

    </AuthProvider>

  </StrictMode>,
)
