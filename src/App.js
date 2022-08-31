import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './Components/Home/Home';
import { Listres } from "./Components/List/Listres";
import Login from './Components/Provider/Login';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/reservation" element={<Listres/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App; 
