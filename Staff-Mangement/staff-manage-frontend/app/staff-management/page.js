"use client"; 

import React from 'react';
import StaffPage from './staff/page'; 
import styles from '../styles/page.module.css';

export default function staffManagement() {
  return (
    <div className={styles.main}>
      <div className={styles.staff}>Staff Management</div>
      <StaffPage/>
    </div>
  );
}
