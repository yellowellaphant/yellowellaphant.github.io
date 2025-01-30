import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Welcome to the Home Page</div>} />
        </Routes>
      </Router>
      <div>
        
      <p>
          Ella Upchurch
        </p>        
        <a
          className="App-link"
          href="https://github.com/yellowellaphant"
          target="_blank"
          rel="noopener noreferrer"
        >
          yellowellaphant (GitHub)
        </a>
      </div>
    </>
  );
}

export default App;
