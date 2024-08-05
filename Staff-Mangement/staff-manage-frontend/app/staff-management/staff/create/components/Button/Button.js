'use client'
import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, primary, onClick, disabled, loading }) => {
  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} ${disabled ? styles.disabledButton : ''}`}
      onClick={onClick}
      disabled={disabled}
      data-tooltip={disabled ? "Please fill all mandatory fields" : ""}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
