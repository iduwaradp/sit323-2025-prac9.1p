import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Snackbar
} from '@mui/material';

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('success');

  const handleAddBook = (e) => {
    e.preventDefault();

    axios.post(`${window.location.origin}/items`, {
      title,
      price,
      description
    })
    .then(() => {
      setAlertMsg('✅ Book added successfully!');
      setAlertType('success');
      setAlertOpen(true);
      setTitle('');
      setPrice('');
      setDescription('');
    })
    .catch((err) => {
      console.error(err);
      setAlertMsg('❌ Failed to add book.');
      setAlertType('error');
      setAlertOpen(true);
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Box
        component="form"
        onSubmit={handleAddBook}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <TextField
          label="Description"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Book
        </Button>
      </Box>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={alertType} onClose={() => setAlertOpen(false)}>
          {alertMsg}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default AdminDashboard;
