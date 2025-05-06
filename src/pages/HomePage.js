import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/items')
      .then((res) => setBooks(res.data))
      .catch((err) => console.error('Error fetching books:', err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/items/${id}`)
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((err) => console.error('Error deleting book:', err));
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Books
      </Typography>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography>${book.price}</Typography>
                <Typography>{book.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="info"
                  onClick={() => navigate(`/edit/${book._id}`)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
