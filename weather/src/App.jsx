// src/App.js
import React from 'react';
import Weather from './components/weather';
import Header from './components/header';
import Footer from './components/footer';
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
