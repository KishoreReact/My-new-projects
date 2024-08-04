import React from 'react';
import styles from './ResponsiveTabs.module.css';
import Link from 'next/link';

export default function ResponsiveTabs() {
  return (
    <div className={styles.tabs}>
      <Link href="staff-management">
        <button className={styles.tabButton}>Staff</button>
      </Link>
      <Link href="staff-management/globalAccess">
        <button className={styles.tabButton}>Global Access</button>
      </Link>
      <Link href="staff-management/organization">
        <button className={styles.tabButton}>Organization</button>
      </Link>
      <Link href="staff-management/team">
        <button className={styles.tabButton}>Team</button>
      </Link>
    </div>
  );
}
