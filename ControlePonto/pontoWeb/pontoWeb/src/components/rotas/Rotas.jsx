
import { Route, Routes } from 'react-router'
import DashBoard from '../../pages/DashBoard'
import Login from '../../pages/Login'
import Registro from '../../pages/Registro'
import PrivateRoute from '../PrivateRoute/PrivateRoute'


const Rotas = () =>{


    return (
        <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<PrivateRoute><Registro /></PrivateRoute>  } />
        </Routes>
    )

}

export default Rotas
