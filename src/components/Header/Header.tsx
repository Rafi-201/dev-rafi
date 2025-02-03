import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}> {/* No elevation/shadow */}
      <Toolbar sx={{ padding: '1rem 2rem' }}> {/* Adjust padding */}
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}> {/* Logo/Name */}
          Jason Chin
        </Typography>
        <Box sx={{ display: 'flex', gap: '1.5rem' }}> {/* Use Box for spacing */}
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;