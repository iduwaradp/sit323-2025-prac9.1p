import React, { useState } from 'react';
import { Button, Typography, Grid, Card, CardContent } from '@mui/material';

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, title: 'Book 1', price: '$10', quantity: 1 },
    { id: 2, title: 'Book 2', price: '$15', quantity: 2 },
  ]);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    // Redirect to Checkout Page (later we can integrate Stripe)
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1">{item.price}</Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
                <Button variant="contained" color="secondary" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default Cart;
