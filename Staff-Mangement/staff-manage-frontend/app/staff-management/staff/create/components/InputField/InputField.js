import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, type = 'text', name, value, onChange, required }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.requiredStar}>*</span>}
      </label>
      <input
        className={styles.input}
        placeholder='Enter here...'
        type={type}
        name={name}
        value={value ?? ''}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
