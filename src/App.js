import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './Components/Home/Home';
import { Listres } from "./Components/List/Listres";
import Login from './Components/Provider/Login';
import Table from "./Components/RoomTable/Table";
import OffersList from "./Components/Pricing/OffersList";
import ModifyOffer from "./Components/Pricing/ModifyOffer";

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/booking" element={<Listres/>}/>
      <Route path="/room" element={<Table/>}/>
      <Route path="/type" element={<OffersList/>}/>
      <Route path="/test" element={<ModifyOffer/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App; 
