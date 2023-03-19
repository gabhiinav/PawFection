import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Chats from "./components/Chats"

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/chats" element= {<Chats />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
