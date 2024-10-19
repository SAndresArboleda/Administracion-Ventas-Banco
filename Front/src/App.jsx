import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './view/landing/landing';

const App=()=> {
  return (  
    <div>
      <Routes>
      <Route exact path = '/' element = {<Landing/>} />
      {/* <Route exact path = '/home' element = {<Home/>} /> */}
      </Routes>
    </div>
  )
}
export default App
