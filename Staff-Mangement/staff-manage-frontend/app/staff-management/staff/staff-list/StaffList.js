"use client"; // Mark this file as a Client Component

import React, { useState, useEffect, useRef } from 'react';
import StaffTable from './StaffTable';
import Pagination from './Pagination';
import SearchBar from '../components/SearchBar';
import AddButton from '../components/AddButton';
import FilterPopup from '../components/FilterPopup';
import styles from '../../../styles/page.module.css';
import FilterButton from '../components/FilterButton';
import { useRouter } from 'next/navigation';

export default function StaffList({ staffData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Example value
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [staffData3, setStaffData3] = useState([]);

  const popupRef = useRef();
  const router = useRouter();

  const fetchStaffData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/staff', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStaffData3(data);
      } else {
        console.error('Failed to fetch staff data');
      }
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, []);


  const staffData2 = [
    { id: 1, name: 'Bhuvesh Kumar', employeeId: '123492', jobRole: 'Sales Person', phoneNumber: '+91 8762638718' },
    { id: 2, name: 'Jane Doe', employeeId: '123493', jobRole: 'Developer', phoneNumber: '+91 8762638719' },
    { id: 3, name: 'John Smith', employeeId: '123494', jobRole: 'Manager', phoneNumber: '+91 8762638720' },
    { id: 4, name: 'Alice Johnson', employeeId: '123495', jobRole: 'Designer', phoneNumber: '+91 8762638721' },
    // Add more staff members as needed
  ];

  const filteredStaff = staffData3.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => setSearchTerm(term);
  const handlePageChange = (page) => setCurrentPage(page);
  

  const handleAdd = () => {
     router.push('staff-management/staff/create')
  };
  const handleFilter = () => setIsFilterPopupOpen(true);
  const handleCloseFilterPopup = () => setIsFilterPopupOpen(false);
  const handleApplyFilter = () => {
    // Apply filter logic
    setIsFilterPopupOpen(false);
  };
  const handleClearFilter = () => {
    // Clear filter logic
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsFilterPopupOpen(false);
      }
    };

    if (isFilterPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterPopupOpen]);

  return (
    <div className={styles.contentArea}>
      <div className={styles.actions}>
        <div className={styles.search}>
          <SearchBar onSearch={handleSearch} />
          <FilterButton onFilter={handleFilter} />
        </div>
        <AddButton onAdd={handleAdd} />
      </div>
      <StaffTable staff={filteredStaff} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      {isFilterPopupOpen && (
        <div ref={popupRef}>
          <FilterPopup
            onClose={handleCloseFilterPopup}
            onApply={handleApplyFilter}
            onClear={handleClearFilter}
          />
        </div>
      )}
    </div>
  );
}
