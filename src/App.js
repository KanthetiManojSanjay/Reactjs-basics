import React from 'react';
import './App.css';
import Home from './components/routing/routeParam/Home';
import Login from './components/routing/routeParam/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
