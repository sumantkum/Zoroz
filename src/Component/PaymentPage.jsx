import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePaymentResult = (success) => {
    if (success) {
      navigate("/payment/success"); // Navigate to success page
    } else {
      navigate("/payment/failure"); // Navigate to failure page
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment</h1>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => handlePaymentResult(true)}
          style={styles.successButton}
        >
          Pay Now (Success)
        </button>
        <button
          onClick={() => handlePaymentResult(false)}
          style={styles.failureButton}
        >
          Pay Now (Failure)
        </button>
      </div>
    </div>
  );
};

export  const PaymentSuccessPage = () => {
  return (
    <div style={styles.successContainer}>
      <h1>Payment Successful! Thank you for your purchase.</h1>
    </div>
  );
};

export  const PaymentFailurePage = () => {
  return (
    <div style={styles.failureContainer}>
      <h1>Payment Failed. Please try again.</h1>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  successButton: {
    padding: "12px 24px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  failureButton: {
    padding: "12px 24px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  successContainer: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
    borderRadius: "8px",
  },
  failureContainer: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
    borderRadius: "8px",
  },
};

export default PaymentPage;
