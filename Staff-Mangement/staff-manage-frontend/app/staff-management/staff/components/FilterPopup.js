"use client";

import React, { useState } from 'react';
import styles from '../styles/FilterPopup.module.css';

const FilterPopup = ({ onClose, onApply, onClear, setRole }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setRole(event.target.value);
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div>Filter</div>
        </div>
        <div className={styles.body}>
          <div className={styles.dropdown}>
            <label htmlFor="team">Team</label>
            <select id="team" className={styles.select}>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className={styles.dropdown}>
            <label htmlFor="roles">Roles</label>
            <select id="roles" className={styles.select} onChange={handleRoleChange}>
              <option value="">Select a role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="marketer">Marketer</option>
            </select>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={onClear} className={styles.cancel}>Clear</button>
          <button onClick={() => onApply(selectedRole)} className={styles.apply}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
