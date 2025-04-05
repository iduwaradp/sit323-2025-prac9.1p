import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

function HomePage() {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: '$10' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: '$15' },
    { id: 3, title: 'Book 3', author: 'Author 3', price: '$20' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Books
      </Typography>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{book.title}</Typography>
                <Typography variant="body1">{book.author}</Typography>
                <Typography variant="h6">{book.price}</Typography>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
