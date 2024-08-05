import React from 'react';
import styles from './CountryCodeSelector.module.css';

const CountryCodeSelector = ({ label,value, onChange,required }) => {
  const countryCodes = [
    { code: '+1', label: '+1' },
    { code: '+44', label: '+44' },
    { code: '+91', label: '+91' },
    // Add more country codes as needed
  ];


  return (
    <div>
    <label className={styles.label}>
        {label}
        {required && <span className={styles.requiredStar}>*</span>}
      </label>
    <select
      className={styles.select}
      name="countryCode"
      value={value}
      onChange={onChange}
    >
      {countryCodes.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default CountryCodeSelector;
