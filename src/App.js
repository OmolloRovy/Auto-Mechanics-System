/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './App.css';
import useTitle from "./hooks/useTitle";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  useTitle("Auto Mechanics")
  return (
  
      <Routes>
      <Route path="" element={<Home />}/>
      
      </Routes>

  );
}

export default App;
