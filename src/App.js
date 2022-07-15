// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); // Setting alert as an object

  const showAlert = (message, type) => {
      setAlert(
        {
          msg: message,
          type: type
        }
      );

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  };

  const toggleMode = () => {
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been turned on", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been turned on", "success");
    }
  };

  return (
    <Router>
      <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode}> </Navbar>
      <Alert alert = {alert} />
      <div className="container my-3">
      
        <Routes>
                  <Route exact path="/about" element={<About mode={mode} />}/>

                  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
