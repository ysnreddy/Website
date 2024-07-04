import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<>Contact us</>} />
        
      </Routes>
    </>
  )
}

export default App
