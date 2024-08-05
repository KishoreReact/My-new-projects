import React from 'react';
import styles from './ResponsiveTabs.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResponsiveTabs() {
  const pathname = usePathname();
  return (
    <div className={styles.tabs}>
      <Link href="staff-management">
        <button className={pathname === '/staff-management' ? styles.active : styles.tabButton}>Staff</button>
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
