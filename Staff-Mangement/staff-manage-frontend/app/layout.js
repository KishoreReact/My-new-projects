'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Header from './components/header/Header';
import Sidebar from './components/navbar/Sidebar';
import styles from './styles/layout.module.css';

const ResponsiveTabs = dynamic(() => import('./staff-management/components/ResponsiveTabs'), {
  ssr: false
});

const hardcodedStaffData = [
  { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
  { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
  { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
  { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
  { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
  { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
  { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobTitle: 'Sales Person', phoneNumber: '+91 8762638718' },
  { id: 2, name: 'Jane Doe', employeeId: '123493', jobTitle: 'Developer', phoneNumber: '+91 8762638719' },
  // Add more hardcoded staff data as needed
];

export default function Layout({ children }) {
  return (
    <html>
      <body>
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, { staffData: hardcodedStaffData }) // Pass hardcoded data
              : child
          )}
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
