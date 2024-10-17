// src/App.js
import React from 'react';
import Weather from './components/Weather';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Custom CSS

const App = () => {
    return (
        <>
            <Header />
            <div className="App">
                <Weather />
            </div>
            <Footer />
        </>
    );
};

export default App;
