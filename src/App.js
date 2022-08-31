import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { AddType } from "./Components/AddType/AddType";
import { Home } from './Components/Home/Home';
import Login from './Components/Provider/Login';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/reserver" element={<AddType/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App; 
