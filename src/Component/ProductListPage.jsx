import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';  // Import axios

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={styles.productListContainer}>
      <h1 style={styles.productListTitle}>Product Listing</h1>
      <div style={styles.productList}>
        {products.map(product => (
          <div key={product.id} style={styles.productItem}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>${product.price}</p>
            <Link to={`/products/${product.id}`} style={styles.viewDetailsLink}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  productListContainer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: "#f4f6"
  },
  productListTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
    
  },
  productItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    width: '100%',
    maxWidth: '250px',
    textAlign: 'left',
    transition: 'box-shadow 0.3s ease',
    textAlign: 'center'
  },
  productItemHover: {
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  productName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: '10px',
  },
  viewDetailsLink: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  viewDetailsLinkHover: {
    backgroundColor: '#0056b3',
  },
};

export default ProductListPage;
