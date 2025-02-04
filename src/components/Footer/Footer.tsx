import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderTop: '1px solid #eee' }}> {/* Add a top border */}
      <Toolbar sx={{ py: 2 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}> {/* Center the text */}
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} Tanvir Hasan Rafi
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;