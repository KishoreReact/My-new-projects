import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, type = 'text', name, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value ?? ''}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
