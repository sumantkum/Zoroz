// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Our E-Commerce Store</h1>
        <p style={styles.subtitle}>Your one-stop shop for amazing products!</p>
      </header>

      <div style={styles.ctaContainer}>
        <p style={styles.ctaText}>Start browsing and explore the best products we have for you!</p>
        <Link to="/products" style={styles.link}>
          <button style={styles.browseButton}>Browse Products</button>
        </Link>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 E-Commerce Store</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    backgroundImage: 'url(https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/67052b44e17f6b702755425e_cover_dms_99698c040a.jpeg)', // Background image URL
    backgroundSize: 'cover', // Cover the entire screen
    backgroundPosition: 'center', // Center the image
  },
  header: {
    backgroundColor: 'rgba(35, 47, 62, 0.8)', // Semi-transparent background to let the image show through
    color: '#fff',
    textAlign: 'center',
    padding: '40px 20px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    flex: 1,
  },
  ctaText: {
    fontSize: '1.3rem',
    marginBottom: '30px',
  },
  link: {
    textDecoration: 'none',
  },
  browseButton: {
    backgroundColor: '#FF9900',
    color: '#fff',
    padding: '14px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  browseButtonHover: {
    backgroundColor: '#E68900',
  },
  footer: {
    backgroundColor: '#232F3E',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  footerText: {
    fontSize: '1rem',
  },
};

export default HomePage;
