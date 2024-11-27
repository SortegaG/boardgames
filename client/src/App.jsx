import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css'
import Home from './components/Main/Home'
// import Register from './components/Header/RegisterForm'
import Main from './components/Main'

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
