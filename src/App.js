import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Link, Router, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
   </div>
  );
}
export default App;