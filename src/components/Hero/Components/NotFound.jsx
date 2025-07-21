import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.heading}>Page Not Found</h2>
        <p style={styles.message}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" style={styles.button}>Back to Home</a>
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
    background: '#f0f4f8',
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
  code: {
    fontSize: '5rem',
    color: '#1e293b',
    margin: '0',
  },
  heading: {
    fontSize: '2rem',
    color: '#334155',
    margin: '10px 0',
  },
  message: {
    fontSize: '1rem',
    color: '#64748b',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
  },
};

export default NotFound;
