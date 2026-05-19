
import { Route, Routes } from 'react-router'
import DashBoard from '../../pages/DashBoard'
import Login from '../../pages/Login'
import Registro from '../../pages/Registro'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Justificativa from '../../pages/Justificativa'


const Rotas = () =>{


    return (
        <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/justificativa' element={<PrivateRoute><Justificativa /></PrivateRoute>  } />
            <Route path='/registro' element={<PrivateRoute><Registro /></PrivateRoute>  } />
        </Routes>
    )

}

export default Rotas
