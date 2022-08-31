import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './Components/Home/Home';
import Login from './Components/Provider/Login';
import { Home } from './Components/Home/Home';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App; 
