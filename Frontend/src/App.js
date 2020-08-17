import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './component/board/board';
import {socket} from './config/socketConn';
import Register from './component/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/board/:user">
        <Board />
      </Route>

    </Router>

    //   <div className="App">
    //     <div className="container-fluid">
    //     {/* <Board/> */}
    //    {/* <Register></Register> */}
    //   </div>
    // </div>
  );
}

export default App;
