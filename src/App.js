//import './App.css';

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null); //We'll use alert variable as an object

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled!', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled!', 'success');
    }
  }
  return (
    <Router>
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </switch>
      </div>
    </Router>
  );  
}

export default App;
