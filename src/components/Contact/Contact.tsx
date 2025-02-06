import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, styled, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat'; // Chat icon for the FAB

// Styled Components for better styling control
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e5e7eb', // Light gray border
    },
    '&:hover fieldset': {
      borderColor: '#6366f1', // Indigo-500 border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6366f1', // Indigo-500 border on focus
    },
  },
  '& .MuiInputLabel-root': {
    color: '#6b7280', // Gray-500 label
  },
  '&:hover .MuiInputLabel-root': {
    color: '#111827', // Gray-900 label on hover
  },
  '&.Mui-focused .MuiInputLabel-root': {
    color: '#6366f1', // Indigo-500 label on focus
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6366f1', // Indigo-500
  color: 'white',
  py: 1.5,
  px: 4,
  fontWeight: 'bold',
  mt: 2,
  transition: 'background-color 0.3s ease', // Smooth transition
  '&:hover': {
    backgroundColor: '#4f46e5', // Indigo-600 on hover
  },
}));

const Contact: React.FC = () => {
  const [open, setOpen] = useState(false); // State to control the popup

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <IconButton
        onClick={handleClickOpen}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#6366f1', // Indigo-500
          color: 'white',
          width: 56,
          height: 56,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#4f46e5', // Indigo-600 on hover
          },
        }}
      >
        <ChatIcon fontSize="large" />
      </IconButton>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold', color: '#111827', textAlign: 'center', py: 3 }}>
          Let's Work Together
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 4, color: '#6b7280', textAlign: 'center' }}>
            If you're interested in working with me on your next project or have any questions, please don't hesitate to reach out. I'd love to hear from you!
          </Typography>

          <Box component="form" noValidate>
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
              label="Tell me about your project"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              InputProps={{
                style: { color: '#111827' }, // Gray-900 text
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 4 }}>
          <Button onClick={handleClose} sx={{ color: '#6b7280', fontWeight: 'bold' }}>
            Cancel
          </Button>
          <StyledButton type="submit" onClick={handleClose}>
            Submit
          </StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;