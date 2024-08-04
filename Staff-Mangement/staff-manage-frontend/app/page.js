"use client"; // Mark this file as a Client Component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';


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

// const { useRouter } = require('next/router');
  

  // const handleNavigation = (path) => {
  //   router.push(path);
  // };

export default function HomePage() {
  const router = useRouter();
  useEffect(()=>{
    router.push('/staff-management');
  },[])
  
  return null
}
