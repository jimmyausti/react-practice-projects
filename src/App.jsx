import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Component from "./components/Component";
import "./App.css";
import TodoApp from "./pages/TodoApp";
import RandomCatFact from "./pages/RandomCatFact";
import AgePredictor from "./pages/AgePredictor";
import ExcuseGenerator from "./pages/ExcuseGenerator";

const App = () => {
  
  return (
    <>
      <Router>
        <Component />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}/>
          <Route path="/TodoApp" element={<TodoApp />} />
          <Route path='/RandomCatFact' element={<RandomCatFact />} />
          <Route path='/AgePredictor' element={<AgePredictor />}/>
          <Route path='/ExcuseGenerator' element={<ExcuseGenerator />}/>
          <Route path="*" element={<h1>404 Error</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
