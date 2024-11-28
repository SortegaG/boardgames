import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import './App.css'
import Home from './components/Main/Home'
import Details from "./components/Main/Details";
// import Register from './components/Header/RegisterForm'
import Main from './components/Main'

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/api/games/:nombre' element={<Details/>} /> 
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
