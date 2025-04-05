import React from 'react';
import { Typography, Button } from '@mui/material';

function Checkout() {
  const handlePayment = () => {
    // Placeholder for Stripe integration
    alert('Proceeding to payment...');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total: $50 (based on your cart)
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Pay with Stripe
      </Button>
    </div>
  );
}

export default Checkout;
