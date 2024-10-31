import { Route, Routes } from 'react-router-dom';
import { UsersAdm } from './components/Admin/usuario/UsersAdm';
import { Login } from './views/Login';
import { VentasAsesor } from './components/Usuario/product/VentasAsesor';
import { VentaAdm } from './components/Admin/Venta/AdmiVenta';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/admin" element={<VentaAdm/>} />
        <Route path="/admin/users" element={<UsersAdm/>} />
        
        <Route path="/asesor" element={<VentasAsesor/>} />
      
      </Routes>
    </div>
  )
}

export default App
