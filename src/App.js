import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AddBookPage from './pages/AddBookPage';
import Profile from './pages/Profile';
import EditBookPage from './pages/EditBookPage'; // ✅ import new page
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} /> {/* ✅ add this line */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
