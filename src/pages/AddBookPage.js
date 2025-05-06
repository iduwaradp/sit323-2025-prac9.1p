import React from 'react';
import { Container, Typography } from '@mui/material';
import AddBookForm from '../components/AddBookForm';

function AddBookPage() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add a New Book
      </Typography>
      <AddBookForm />
    </Container>
  );
}

export default AddBookPage;
