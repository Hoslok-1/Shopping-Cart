import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';

import './cssFiles/App.css';

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/Shop' element = {<Shop/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
