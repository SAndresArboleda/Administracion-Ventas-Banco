import { Route, Routes } from 'react-router-dom';
import { Login } from './views/Login';
import { VentaAdm } from './components/Admin/Venta/AdmiVenta';
import { AdmiUser} from './components/Admin/usuario/AdmiUser';
import { AsesorVentas } from './components/Usuario/product/AsesorVentas';
import { CrearVentaAsesor } from './components/Usuario/product/CrearVentaAsesor';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/admin" element={<VentaAdm/>} />
        <Route path="/admin/users" element={<AdmiUser/>} />
        
        <Route path="/asesor" element={<AsesorVentas/>} />
        <Route path="/asesor/Venta" element={<CrearVentaAsesor/>} />
      
      </Routes>
    </div>
  )
}

export default App
