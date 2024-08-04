'use client'
import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import Button from '../Button/Button';
import styles from './AddStaffForm.module.css';
import SuccessPopup from '../successpopup/SuccessPopup'; // Adjust the path as needed
import { useRouter } from 'next/navigation';


const AddStaffForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    personalMailId: '',
    companyMailId: '',
    phoneNumber: '',
    dateOfBirth: null,
    gender: '',
    jobRole: '',
    joiningDate: null,
    relievingDate: null,
    aadhaarNumber: '',
    education: '',
    houseStreetArea: '',
    village: '',
    district: '',
    state: '',
    country: '',
    pinCode: '',
    maritalStatus: '',
    spouseName: '',
    maleChildrenCount: 0,
    femaleChildrenCount: 0,
  });
  const router = useRouter();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
      } else {
        alert('Error adding staff');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding staff');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/staff-management');
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className={styles.buttonContainer}>
        <div className={styles.leftSection}>Staff Management</div>
        <div className={styles.rightSection}>Add Staff</div>
      </div>
      <h4>Personal Details</h4>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.row}>
            <div className={styles.column1}>
              <div className={styles.photo}>
                <img src="/profile-placeholder.png" alt="Profile" />
                <button className={styles.editPhoto}>Edit</button>
              </div>
            </div>
            <div className={styles.column2}>
              <InputField label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleInputChange} />
              <InputField label="Name" name="name" value={formData.name} onChange={handleInputChange} />
              <InputField label="Personal Mail ID" name="personalMailId" value={formData.personalMailId} onChange={handleInputChange} />
              <InputField label="Company Mail ID" name="companyMailId" value={formData.companyMailId} onChange={handleInputChange} />
            </div>
            <div className={styles.column3}>
              <InputField label="Phone Number" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
              <InputField label="Date of Birth" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
              <SelectField label="Gender" name="gender" options={['Male', 'Female', 'Other']} value={formData.gender} onChange={handleInputChange} />
              <InputField label="Job Role" name="jobRole" value={formData.jobRole} onChange={handleInputChange} />
            </div>
          </div>
        </div>
        <h4>Start and Relieving Date</h4>
        <div className={styles.section2}>
          <div className={styles.row}>
            <InputField label="Joining Date" type="date" name="joiningDate" value={formData.joiningDate} onChange={handleInputChange} />
            <InputField label="Relieving Date" type="date" name="relievingDate" value={formData.relievingDate} onChange={handleInputChange} />
          </div>
        </div>
        <div className={styles.section2S}>
          <div>
            <h4>Government ID Proof</h4>
            <div className={styles.section2}>
              <div className={styles.row}>
                <InputField label="Aadhaar Number" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div>
            <h4>Education Details</h4>
            <div className={styles.section2}>
              <div className={styles.row}>
                <InputField label="Education" name="education" value={formData.education} onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <h4>Address</h4>
        <div className={styles.section}> 
          <div className={styles.row}>
            <InputField label="House No, Street, Area" name="houseStreetArea" value={formData.houseStreetArea} onChange={handleInputChange} />
            <InputField label="Village" name="village" value={formData.village} onChange={handleInputChange} />
            <InputField label="District" name="district" value={formData.district} onChange={handleInputChange} />
            <InputField label="State" name="state" value={formData.state} onChange={handleInputChange} />
            <InputField label="Country" name="country" value={formData.country} onChange={handleInputChange} />
            <InputField label="PIN Code" name="pinCode" value={formData.pinCode} onChange={handleInputChange} />
          </div>
        </div>
        <h4>Family Info</h4>
        <div className={styles.section5}>
          <div className={styles.row}>
            <SelectField label="Marital Status" name="maritalStatus" options={['Single', 'Married']} value={formData.maritalStatus} onChange={handleInputChange} />
            <InputField label="Spouse Name" name="spouseName" value={formData.spouseName} onChange={handleInputChange} />
            <div className={styles.childrenCount}>
              <label>Children</label>
              <div>
                <label>Male</label>
                <button type="button" onClick={() => handleNumberChange('maleChildrenCount', formData.maleChildrenCount - 1)}>-</button>
                <input type="number" name="maleChildrenCount" value={formData.maleChildrenCount} readOnly />
                <button type="button" onClick={() => handleNumberChange('maleChildrenCount', formData.maleChildrenCount + 1)}>+</button>
                <label>Female</label>
                <button type="button" onClick={() => handleNumberChange('femaleChildrenCount', formData.femaleChildrenCount - 1)}>-</button>
                <input type="number" name="femaleChildrenCount" value={formData.femaleChildrenCount} readOnly />
                <button type="button" onClick={() => handleNumberChange('femaleChildrenCount', formData.femaleChildrenCount + 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.buttoncol}>
            <Button label="Create Profile" primary type="submit" />
            <Button label="Cancel" type="button" />
          </div>
        </div>
      </div>
    </form>
    {showPopup && <SuccessPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default AddStaffForm;

