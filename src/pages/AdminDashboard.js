import React from 'react';
import { Button, Typography, TextField, Grid } from '@mui/material';

function AdminDashboard() {
  const handleAddBook = () => {
    // Function to add a new book (You can connect this to your backend later)
    alert('Add a new book...');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <TextField label="Book Title" fullWidth margin="normal" />
      <TextField label="Author" fullWidth margin="normal" />
      <TextField label="Price" fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Add Book
      </Button>
    </div>
  );
}

export default AdminDashboard;
