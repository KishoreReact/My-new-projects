"use client"; 
import React from 'react';
import styles from '../styles/FilterButton.module.css';

const FilterButton = ({ onFilter }) => {
  
  return (
    <button className={styles.filterButton} onClick={onFilter}>
      <img src="/images/Filter.png" alt="Filter" className={styles.filterImage}/>
    </button>
  );
};

export default FilterButton;
