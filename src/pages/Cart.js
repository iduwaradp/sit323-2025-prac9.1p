import React from 'react';
import { Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1">${item.price}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Total: ${total}
      </Typography>

      <Button variant="contained" color="primary" onClick={handleCheckout} sx={{ mt: 2 }}>
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default Cart;
