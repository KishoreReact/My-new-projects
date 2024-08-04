"use client"; // Mark this file as a Client Component

import React from 'react';
import styles from '../styles/FilterPopup.module.css';

const FilterPopup = ({ onClose, onApply, onClear }) => {
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
              {/* Add team options here */}
            </select>
          </div>
          <div className={styles.dropdown}>
            <label htmlFor="roles">Roles</label>
            <select id="roles" className={styles.select}>
              {/* Add roles options here */}
            </select>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={onClear} className={styles.cancel}>Clear</button>
          <button onClick={onApply} className={styles.apply}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
