import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';

function Profile() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Avatar sx={{ width: 80, height: 80, mb: 2 }}>U</Avatar>
        <Typography variant="h4" gutterBottom>User Profile</Typography>
        <Typography variant="body1">👤 Name: Demo User</Typography>
        <Typography variant="body1">📧 Email: user@example.com</Typography>
        <Typography variant="body1">📦 Orders: 3 (mock)</Typography>
        <Typography variant="body1">🎁 Member Since: Jan 2024</Typography>
      </Box>
    </Container>
  );
}

export default Profile;
