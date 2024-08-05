import React from 'react';
import styles from './SelectField.module.css'; 

const SelectField = ({ label, name, value, onChange, options, required }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.requiredStar}>*</span>}
      </label>
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
