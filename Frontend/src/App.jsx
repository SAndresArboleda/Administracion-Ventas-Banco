import { Route, Routes } from 'react-router-dom';
import { Login } from './views/login';
import { ProductAdm } from './components/Admin/product/ProductAdm';
import { UsersAdm } from './components/Admin/usuario/UsersAdm';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/admin" element={<ProductAdm />} />
        <Route path="/admin/users" element={<UsersAdm/>} />
        
        <Route path="/asesor/ventas" element={<UsersAdm/>} />
      
      </Routes>
    </div>
  )
}

export default App
