import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { 
  Button
 } from "@mui/material";

import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {

  return (
    <div class="LoginPage">
      <NavBar/>
      <Login/>
    </div>
  );
}

export default App;
