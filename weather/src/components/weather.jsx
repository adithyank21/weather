// src/Weather.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, CircularProgress } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const apiKey = 'a43840f783e542c7aeaf9b4e50c1f84e'; // Replace with your actual API key

    const fetchWeather = async () => {
        if (!location) return;
        setLoading(true);
        
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Location not found');
            }
            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <Container className='homecontainer' maxWidth="sm" style={{ textAlign: 'center' }}>
            <WbSunnyIcon style={{ fontSize: 40 , color:'lightblue'}} />
            <Typography 
    variant="h6" 
    gutterBottom 
    style={{
        color: 'white',
        fontWeight: 'bold', // Make the font bold
        textTransform: 'uppercase', // Transform text to uppercase
        letterSpacing: '2px', // Increase letter spacing
        fontFamily: 'Arial, sans-serif', // Use a specific font family
    }}
>
    Weather App
</Typography>

           
            <form onSubmit={handleSubmit}>
                <input type='text'
                placeholder='Enter your location'
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    style={{ marginRight: '10px', width: '200px',height:'20px',backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius:'10px' /* White with 80% opacity */

                    }} // Adjusted height for a standard look
                />
                <br/>
                <br/>
                <Button variant="contained" color="primary" type="submit" disableElevation>
      Get Weather
    </Button>
                {/* <Button variant="contained" color="primary" type="submit" style={{ borderRadius: '20px' , width:'150px' ,height:'70px' ,fontSize:'small'}}>
                    Get Weather
                </Button> */}
            </form>
            {loading && <CircularProgress style={{ marginTop: '20px' }} />}
            {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}
            {weatherData && (
                <div style={{ marginTop: '20px' ,color:'white'}}>
                    <Typography variant="h5" >{weatherData.name}</Typography>
                    <Typography variant="body1" >Temperature: {weatherData.main.temp} °C</Typography>
                    <Typography variant="body1" >Weather: {weatherData.weather[0].description}</Typography>
                </div>
            )}
        </Container>
    );
};

export default Weather;
