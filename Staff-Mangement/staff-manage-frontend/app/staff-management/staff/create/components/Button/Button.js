// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, primary, onClick, disabled, loading }) => {
  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
