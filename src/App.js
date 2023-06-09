import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Pin from './components/Pin';
import Home from './components/Home';

function App() {
  
  return (
      <Router>
          <Routes>
            <Route  path="/" element={<Home/>} />
            {/* <Route path="/about" component={About} /> */}
          </Routes>
      </Router>
  );
}

export default App;
