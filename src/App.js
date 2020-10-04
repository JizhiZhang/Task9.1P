import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header'
import CardList from './CardList'

function App() {
  var React = require('react')
  var FA = require('react-fontawesome')
  return (
    <div>
      <div>
      <BrowserRouter>
      <header className="header">
          <div className="brand">
            <a href="https://infinite-hollows-91372.herokuapp.com/" target="_blank">iCrowdTask</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">How it works</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Requesters</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Workers</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Pricing</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">About</a>
          </div>
          <div className="header-links">
              <button><a href="https://infinite-hollows-91372.herokuapp.com/">Sign In</a></button>
          </div>
        </header>
      </BrowserRouter>
      </div>

      <div className='img-container'>
        <img src= {require("./img/bigimg.jpg")}></img>
      </div>
    
      <div>
        <h1 className="title">Featured Requesters</h1>
      </div>
      <CardList />
    </div>
  );
}

export default App;
