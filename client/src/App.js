import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Registration from "./components/registration/Registration";
import fileUpload from "./components/parse/fileUpload";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path = "/" component={Registration}/>
      <Route exact path = "/parse" component={fileUpload}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
