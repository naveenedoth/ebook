import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Products from './products';
import About from './about';
import Login from './login';
import Register from './register';
import Home from './home-components/home';
import ContactUs from './home-components/contact-us';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
