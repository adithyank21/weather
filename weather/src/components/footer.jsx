// src/components/Footer.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            component="footer" 
            style={{ 
                backgroundColor: '#3f51b5', 
                padding: '10px 0', 
                position: 'fixed', 
                bottom: 0, 
                width: '100%',
                color: 'white',
                textAlign: 'center'
            }}
        >
            <Typography variant="body2">
                © 2024 Weather App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
