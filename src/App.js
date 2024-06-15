
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";


import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/event" element={<About/>}/>
     </Routes>
    </div>
  );
}

export default App;
