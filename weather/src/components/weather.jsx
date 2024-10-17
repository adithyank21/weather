// src/components/Weather.js
import React, { useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const apiKey = 'a43840f783e542c7aeaf9b4e50c1f84e'; // Replace with your API key

    const fetchWeather = async () => {
        if (!location) return;
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
            );
            if (!response.ok) throw new Error('City not found');
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

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') fetchWeather();
    };

    return (
        <Container className='weather-container' maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={handleInputKeyPress}
                placeholder="Enter city name"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={fetchWeather}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                style={{ backgroundColor: 'white', borderRadius: '5px' }}
            />
            {loading && <CircularProgress style={{ marginTop: '20px' }} />}
            {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}
            {weatherData && (
                <div style={{ marginTop: '20px', color: 'white' }}>
                    <Typography variant="h4">{weatherData.name}</Typography>
                    <Typography variant="h6">Temperature: {weatherData.main.temp} °C</Typography>
                    <Typography variant="body1">Weather: {weatherData.weather[0].description}</Typography>
                </div>
            )}
        </Container>
    );
};

export default Weather;
