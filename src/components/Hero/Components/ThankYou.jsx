import React from 'react';

const ThankYou = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.message}>
          Your enquiry has been received.<br />
          We’ll get back to you shortly.
        </p>
        <a href="/" style={styles.button}>Done</a>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    background: '#f9f9f9',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

export default ThankYou;
