import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { AddType } from "./Components/AddType/AddType";
import { Home } from './Components/Home/Home';
import { Listres } from "./Components/List/Listres";
import Login from './Components/Provider/Login';
import Table from "./Components/RoomTable/Table";
import OffersList from "./Components/Pricing/OffersList";

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/reserver" element={<AddType/>}/>
      <Route path="/booking" element={<Listres/>}/>
      <Route path="/room" element={<Table/>}/>
      <Route path="/type" element={<OffersList/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App; 
