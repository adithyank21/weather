// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
            <Toolbar>
                <CloudIcon style={{ marginRight: '10px', color: 'white' }} />
                <Typography variant="h6" style={{ flexGrow: 1, color: 'white' }}>
                    Weather Application
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
