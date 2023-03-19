import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Blogs from "./components/Blogs"
import CreatePost from "./components/CreatePost"
import './App.css';


function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/blogs" element= {<Blogs />} />
        <Route path="/createpost" element= {<CreatePost />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
