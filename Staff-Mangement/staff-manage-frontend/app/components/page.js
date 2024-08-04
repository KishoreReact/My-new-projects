"use client"; // Mark this file as a Client Component

import React from 'react';
import StaffPage from '../staff/page'; 
import styles from '../styles/page.module.css';
import ResponsiveTabs from '../staff-management/components/ResponsiveTabs';

// const staffData = [
//   { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
//   { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
//   { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
//   { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
//   { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
//   { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
//   { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
//   { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
//   // Add more staff members as needed
// ];

export default function HomePage() {
  return (
    <div className={styles.main}>
      {/* <h1>Staff Management</h1> */}
      <ResponsiveTabs selectedTab="staff" />
      <StaffPage/>
    </div>
  );
}
