import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Details from './pages/Details'
import Inverstoe from './pages/Inverstoe';
import Loginpage from './pages/login';
import axios from 'axios';
import Regester from './pages/regester'

axios.defaults.baseURL='http://localhost:4000'
axios.defaults.withCredentials=true;

function App() {
  return (
    <Router>
      <div className="App bg-[#c4bac6] w-screen h-full">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/investors" element={<Inverstoe />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/login" element={<Loginpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
