import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './components/Contact/Contact';
import Industries from './components/Industries/Industries';
import ComputerVision from './components/ComputerVision/ComputerVision';
import About from './components/About/About';

function App() {

  return (
    <>
      
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Industries' element={<Industries/>} />
        <Route path='/solutions' element={<ComputerVision/>} />
        <Route path='/About' element={<About/>} />
   
      </Routes>
    </>
  )
}

export default App
