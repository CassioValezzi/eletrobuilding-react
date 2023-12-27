import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css 
import "./assets/css/default.css"
// pages 
import { About }  from "./pages/about"
import { Contact }  from "./pages/contact";
// components


function App() {

  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={
          <About />
        } />
        <Route path="/contact" element={
          <Contact />
        } />
      </Routes>
    </Router>
  );
}

export default App;