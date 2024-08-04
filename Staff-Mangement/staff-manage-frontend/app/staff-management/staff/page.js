"use client"; // Mark this file as a Client Component

import React from 'react';
import StaffList from './staff-list/StaffList';
import AddStaffForm from './create/components/AddStaffForm/AddStaffForm';
import ResponsiveTabs from '@/app/staff-management/components/ResponsiveTabs';
import styles from './styles/StaffPage.module.css';

export default function StaffPage({ staffData }) {
  return (
    <div className={styles.staff}>
      <ResponsiveTabs/>
      <StaffList staffData={staffData} />
      {/* <AddStaffForm/> */}
      
    </div>
  );
}
