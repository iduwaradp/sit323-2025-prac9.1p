import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Snackbar,
  Alert
} from '@mui/material';

function Checkout() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Simple validation
    if (cardNumber.length < 12 || expiry.length < 5 || cvv.length < 3) {
      alert("❌ Please enter valid card details.");
      return;
    }

    // ✅ Simulate payment
    setOpenSnackbar(true);

    // Reset form
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Card Number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <TextField
          label="Expiry Date (MM/YY)"
          required
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <TextField
          label="CVV"
          required
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Pay Now
        </Button>
      </Box>

      {/* ✅ Feedback Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          ✅ Order placed! This is a mock checkout.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Checkout;
