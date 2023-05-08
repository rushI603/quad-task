import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Pin from './components/Pin';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
          </Routes>
        </Router>
      

     </div> 
  );
}

export default App;
