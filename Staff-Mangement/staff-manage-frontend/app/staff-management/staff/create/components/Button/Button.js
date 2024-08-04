import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, primary }) => {
  return (
    <button className={primary ? styles.primary : styles.secondary}>
      {label}
    </button>
  );
};

export default Button;
