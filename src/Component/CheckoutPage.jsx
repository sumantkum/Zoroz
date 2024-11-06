import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePayment = (e) => {
    e.preventDefault();  // Prevent form submission
    if (name && address && number) {
      navigate("/payment");
    } else {
      setIsValid(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Checkout</h1>

      <form onSubmit={handlePayment} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        {!isValid && (
          <p style={styles.error}>Please fill in all fields.</p>
        )}
        <button type="submit" style={styles.button}>Proceed to Payment</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    outline: "none",
    transition: "border 0.3s ease",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "#dc3545",
    fontSize: "0.875rem",
    margin: "0",
  },
};

export default CheckoutPage;
