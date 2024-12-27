import React from 'react';
import  Navbar from './Navbar.js';
import  Footer from './pages/Footer.js';
//import Blog from './pages/blog.js'; 
//import Newletter from './pages/newletter.js';
import Team from './pages/Team.js';
import Contract from './pages/contract.js';
//import { BrowserRouter, Routes, Route } from "react-router";
//import './App.css';
//import Newletter from './pages/newletter.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Contract/>
        <Team/>
        <Footer/>
    </div>
  );
}

export default App;
