import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./main.css"
import MenuTopo from './Componentes/MenuTopo/MenuTopo'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './Views/Home/HomePage'
import LoginPage from './Views/Login/LoginPage'
import SobrePage from './Views/Sobre/SobrePage'
import DashPage from './Views/Dashboard/DashPage'
import ConfigPage from './Views/config/ConfigPage'
import AdminPage from './Views/admin/AdminPage'
import PrivateRoute from './Componentes/PrivateRoute/PrivateRoute'
import NegadoPage from './Views/negado/NegadoPage'
import { AuthProvider } from './Componentes/Context/UserContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <BrowserRouter>    
          <MenuTopo />

          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/sobre' element={<SobrePage />} />
              <Route path='/negado' element={<NegadoPage />} />
              <Route path='/dash' element={<PrivateRoute><DashPage /></PrivateRoute>  } />
              <Route path='/admin' element={ <PrivateRoute role="ADMIN"><AdminPage /></PrivateRoute>} />
              <Route path='/config' element={<PrivateRoute role="USER"><ConfigPage /></PrivateRoute>} />

          </Routes>


      </BrowserRouter>
      
    </AuthProvider>
    

  </StrictMode>,
)
