import React from 'react';
import styles from './SelectField.module.css'; // You might want to create a separate CSS module for SelectField

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.input}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
