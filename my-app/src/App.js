import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './screens/Login/login.js';
import Home from './screens/Home/home.js';
import Register from './screens/Register/register.js';
import SearchFood from './screens/SearchFood/searchFood.js';
import listFood from './screens/ListFood/listFood.js';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register}/>
      <Route path="/home" exact component={Home} />
      <Route path="/restaurant" exact component={SearchFood} />
      <Route path="/restaurant/food/:id" exact component={listFood} />
    </Router>
  );
}

export default App;
