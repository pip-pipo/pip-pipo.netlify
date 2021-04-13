import React from "react";
import Navbar from "./components/navBar/Navbar";
import FaceData from "./components/navBar/FaceData";
import Home from "./components/Home/Home";
import {BrowserRouter as Router , Switch,Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
      <FaceData />
      <Navbar/>
    <Switch>

      <Route exact  path={'/'} component={Home}/>
      

    </Switch>
    </Router>
  );
};

export default App;
