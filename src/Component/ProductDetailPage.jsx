import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <h3>Loading....</h3>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.productName}>{product.name}</h1>
      <div style={styles.productDetail}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <p style={styles.productDescription}>{product.description}</p>
          <p style={styles.productPrice}>${product.price}</p>
          <button style={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  productName: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  productDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    marginTop: "20px",
  },
  productImage: {
    width: "300px",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  productInfo: {
    maxWidth: "500px",
    textAlign: "left",
  },
  productDescription: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "15px",
  },
  productPrice: {
    fontSize: "1.5rem",
    color: "#e91e63",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  addToCartButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ProductDetailPage;
