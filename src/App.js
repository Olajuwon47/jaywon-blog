import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import Header from './Header.js';
import  Home from './pages/Home.js';
import  Footer from './Footer.js';
//import Newletter from './pages/newletter.js';
//import Team from './pages/Team.js';
import Blog from './pages/blog.js'; 
import Contact from './pages/contract.js';
import Mission from './pages/Mission.js';
import About from './pages/About.js';
import Price from './pages/Price.js';
import Add from './pages/Add.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
                  <Route index  element={<Home />} />
                  <Route path="blog" element={<Blog/>} />
                  <Route path="About" element={<About/>} />
                  <Route path="Mission" element={<Mission/>} />
                  <Route path="contact" element={<Contact/>} />
                  <Route path="Price" element={<Price/>} />
                  <Route path="Add" element={<Add/>} />
       </Routes>
        <Footer/>
    </div>
  );
}

export default App;


