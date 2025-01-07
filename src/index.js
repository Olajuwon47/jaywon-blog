import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import Blog from './pages/blog.js'; 
import Contact from './pages/contract.js';
import Mission from './pages/Mission.js';
import About from './pages/About.js';
import Price from './pages/Price.js';
import Add from './pages/Add.js';
import Notfound from './notfound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
                <Route  >
                  <Route path="*" element={< Notfound/>} />
                  <Route path="blog" element={<Blog/>} />
                  <Route path="About" element={<About/>} />
                  <Route path="Mission" element={<Mission/>} />
                  <Route path="contact" element={<Contact/>} />
                  <Route path="Price" element={<Price/>} />
                  <Route path="Add" element={<Add/>} />
                 
                </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
