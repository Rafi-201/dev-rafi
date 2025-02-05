import React from 'react';
import { Container, Typography, TextField, Button, Box, styled } from '@mui/material';

// Styled Components for better styling control
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#4b5563', // Gray-500 border
    },
    '&:hover fieldset': {
      borderColor: '#111827', // Gray-900 border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6366f1', // Indigo-500 border on focus
    },
  },
  '& .MuiInputLabel-root': {
    color: '#4b5563', // Gray-500 label
  },
  '&:hover .MuiInputLabel-root': {
    color: '#111827', // Gray-900 label on hover
  },
  '&.Mui-focused .MuiInputLabel-root': {
    color: '#6366f1', // Indigo-500 label on focus
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#111827', // Gray-900
  color: 'white',
  py: 1.5,
  px: 4,
  fontWeight: 'bold',
  mt: 2,
  transition: 'background-color 0.3s ease', // Smooth transition
  '&:hover': {
    backgroundColor: '#6366f1', // Indigo-500 on hover
  },
}));


const Contact: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100"> {/* Added background */}
      <Container sx={{ py: 6, textAlign: 'center' }}> {/* Centered content */}
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
          Let's Work Together
        </Typography>
        <Typography variant="body1" sx={{ mb: 8, color: '#4b5563', maxWidth: 600, mx: 'auto' }}> {/* Added text color and max-width */}
          If you're interested in working with me on your next project or have any questions, please don't hesitate to reach out.  I'd love to hear from you!
        </Typography>

        <Box component="form" noValidate sx={{ maxWidth: 600, mx: 'auto' }}>
          <StyledTextField
            label="Name"
            fullWidth
            margin="normal"
            required
            InputProps={{
              style: { color: '#111827' }, // Gray-900 text
            }}
          />
          <StyledTextField
            label="Email"
            fullWidth
            margin="normal"
            required
            type="email"
            InputProps={{
              style: { color: '#111827' }, // Gray-900 text
            }}
          />
          <StyledTextField
            label="Company (Optional)"
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: '#111827' }, // Gray-900 text
            }}
          />
          <StyledTextField
            label="How can I help you?"
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: '#111827' }, // Gray-900 text
            }}
          />
          <StyledTextField
            label="Tell us about your project"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            InputProps={{
              style: { color: '#111827' }, // Gray-900 text
            }}
          />

          <StyledButton type="submit">
            Submit
          </StyledButton>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;