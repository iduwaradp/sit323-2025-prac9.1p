import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';

function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', price: '', description: '' });

  useEffect(() => {
    axios.get(`/items`)
      .then((res) => {
        const found = res.data.find((b) => b._id === id);
        if (found) setBook(found);
      })
      .catch((err) => console.error('Error loading book:', err));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/items/${id}`, book)
      .then(() => navigate('/'))
      .catch((err) => console.error('Error updating book:', err));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Edit Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          value={book.price}
          onChange={handleChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={book.description}
          onChange={handleChange}
          fullWidth margin="normal"
          multiline
        />
        <Button type="submit" variant="contained" color="primary">
          Update Book
        </Button>
      </form>
    </Container>
  );
}

export default EditBookPage;
