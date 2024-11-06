// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/products" style={linkStyle}>Products</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/checkout" style={linkStyle}>Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Header and navigation styles
const headerStyle = {
  backgroundColor: '#232F3E', // Dark blue like Amazon's header
  padding: '15px 20px',
  textAlign: 'center',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex', // Align items in a row
  justifyContent: 'center', // Center the links horizontally
};

const navItemStyle = {
  margin: '0 20px', // Add some space between menu items
  textTransform: 'uppercase', // Make links uppercase for better readability
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 'bold', // Make the text bold for better emphasis
  transition: 'color 0.3s ease', // Smooth color transition for hover effect
};

const linkHoverStyle = {
  color: '#FF9900', // Orange color on hover (similar to Amazon's hover effect)
};

export default Header;
