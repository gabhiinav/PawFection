import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import './App.css';


function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/" element= {<Home />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
