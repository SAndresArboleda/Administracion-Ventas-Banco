import { Route, Routes } from 'react-router-dom';
import { ProductAdm } from './components/Admin/product/ProductAdm';
import { UsersAdm } from './components/Admin/usuario/UsersAdm';
import { Login } from './views/Login';
import { VentasAsesor } from './components/Usuario/product/ProductAdm';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/admin" element={<ProductAdm />} />
        <Route path="/admin/users" element={<UsersAdm/>} />
        
        <Route path="/asesor" element={<VentasAsesor/>} />
      
      </Routes>
    </div>
  )
}

export default App
