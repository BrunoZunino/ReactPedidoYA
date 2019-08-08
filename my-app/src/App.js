import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './screens/Login/login.js';
import Home from './screens/Home/home.js';
import Register from './screens/Register/register.js';
import SearchFood from './screens/SearchFood/searchFood.js';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}/>
      <Route path="/home" component={Home} />
      <Route path="/restaurant/food" component={SearchFood} />
    </Router>
  );
}

export default App;
