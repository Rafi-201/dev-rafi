import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
      <Container sx={{ py: 6 }}>
        <Typography variant="body1" sx={{ mb: 8 }}>
          If you're interested in working with me... (contact intro text)
        </Typography>
        <Box component="form" noValidate sx={{ maxWidth: 600, mx: 'auto' }}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <TextField
            label="Company"
            fullWidth
            margin="normal"
          />
          <TextField
            label="How can I help you?"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tell us about your project"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black', // Or your desired color
              color: 'white',
              py: 1.5,
              px: 4,
              fontWeight: 'bold',
              mt: 2,
              '&:hover': { backgroundColor: 'gray' }, // Hover effect
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Contact;