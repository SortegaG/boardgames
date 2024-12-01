import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import './App.css'
import Home from './components/Main/Home'
import Details from "./components/Main/Details";
// import Register from './components/Header/RegisterForm'
import Main from './components/Main'
import Profile from './components/Main/Profile'


const App = () => {
  return (
    <Router>
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        { <Route path='/games/:id' element={<Details/>} /> }
        {<Route path="/profile" element={<Profile />} />}
      </Routes>
    </Router>
  );
};


export default App;
