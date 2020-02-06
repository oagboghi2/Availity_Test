import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Registration from "./components/registration/Registration";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path = "/" component={Registration}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
