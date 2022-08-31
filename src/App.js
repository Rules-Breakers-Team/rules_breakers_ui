import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Routes path="/"/>
          <Routes path="/login"/>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App; 
