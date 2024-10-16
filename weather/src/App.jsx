// src/App.js
import React from 'react';
import Weather from './components/weather';
import './App.css'; // Import your CSS file
import Footer from './components/footer';

const App = () => {
    return (
      <>
      
      <body>
        
        <div className="App">
            <Weather />
        </div>
      </body>

      
        </>  
    );
};

export default App;
