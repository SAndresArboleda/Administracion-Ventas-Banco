import { Route, Routes } from 'react-router-dom';
import { Login } from './views/logina';
import { ProductAdm } from './components/Admin/product/ProductAdm';
import { UsersAdm } from './components/Admin/usuer/UsersAdm';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<ProductAdm />} />
        <Route path="/admin/users" element={<UsersAdm/>} /> 
      
        
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
