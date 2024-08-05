'use client'
import React, { useState, useEffect } from 'react';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './AddStaffForm.module.css';
import SuccessPopup from '../successpopup/SuccessPopup'; 
import { useRouter } from 'next/navigation';
import CountryCodeSelector from './CountryCodeSelector';

const AddStaffForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    personalMailId: '',
    companyMailId: '',
    phoneNumber: '',
    countryCode: '+91',
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
  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: Number(value) });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.employeeId) newErrors.employeeId = 'Employee ID is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.personalMailId) newErrors.personalMailId = 'Personal Mail ID is required';
    if (!formData.companyMailId) newErrors.companyMailId = 'Company Mail ID is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.jobRole) newErrors.jobRole = 'Job Role is required';
    if (!formData.joiningDate) newErrors.joiningDate = 'Joining Date is required';
    if (!formData.houseStreetArea) newErrors.houseStreetArea = 'House No, Street, Area is required';
    if (!formData.village) newErrors.village = 'Village is required';
    if (!formData.district) newErrors.district = 'District is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.pinCode) newErrors.pinCode = 'PIN Code is required';
    if (!formData.education) newErrors.education = 'Education is required';
    // Add more validation rules as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
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
        setFormData({}); // Reset form data
      } else {
        alert('Error adding staff');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding staff');
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/staff-management');
  };

  const handleCancel = () => {
    console.log("handleCancel");
    
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
                  <div className={styles.profilepic}>Profile Photo</div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                  <FontAwesomeIcon icon={faPencilAlt} className={styles.editPhoto}/>
                </div>
              </div>
              <div className={styles.column2}>
                <InputField 
                  label="Employee ID" 
                  name="employeeId" 
                  value={formData.employeeId} 
                  onChange={handleInputChange} 
                  required 
                  error={errors.employeeId}
                />
                <InputField 
                  label="Personal Mail ID" 
                  name="personalMailId" 
                  value={formData.personalMailId} 
                  onChange={handleInputChange} 
                  required
                  error={errors.personalMailId}
                />
                <div className={styles.phoneContainer}>
                  <div className={styles.movedUp}>
                    <div className={styles.numberlabel}>Phone Number</div>
                    <CountryCodeSelector
                      value={formData.countryCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.inputNumber}>
                    <InputField 
                      label="" 
                      type="tel" 
                      name="phoneNumber" 
                      className={styles.phoneNumber} 
                      value={formData.phoneNumber} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>
                <SelectField 
                  label="Gender" 
                  name="gender" 
                  options={['Male', 'Female', 'Other']} 
                  value={formData.gender} 
                  onChange={handleInputChange} 
                  required
                  error={errors.gender}
                />
              </div>
              <div className={styles.column3}>
                <InputField 
                  label="Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required
                  error={errors.name}
                />
                <InputField 
                  label="Company Mail ID" 
                  name="companyMailId" 
                  value={formData.companyMailId} 
                  onChange={handleInputChange} 
                  required
                  error={errors.companyMailId}
                />
                <InputField 
                  label="Date of Birth" 
                  type="date" 
                  name="dateOfBirth" 
                  value={formData.dateOfBirth} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Job Role" 
                  name="jobRole" 
                  value={formData.jobRole} 
                  onChange={handleInputChange} 
                  required
                  error={errors.jobRole}
                />
              </div>
            </div>
          </div>
          <h4>Start and Relieving Date</h4>
          <div className={styles.section2}>
            <div className={styles.row}>
              <InputField 
                label="Joining Date" 
                type="date" 
                name="joiningDate" 
                value={formData.joiningDate} 
                onChange={handleInputChange} 
                required
                error={errors.joiningDate}
              />
              <InputField 
                label="Relieving Date" 
                type="date" 
                name="relievingDate" 
                value={formData.relievingDate} 
                onChange={handleInputChange} 
              />
            </div>
          </div>
          <div className={styles.section2S}>
            <div>
              <h4>Government ID Proof</h4>
              <div className={styles.section2}>
                <div className={styles.row}>
                  <InputField 
                    label="Aadhaar Number" 
                    name="aadhaarNumber" 
                    value={formData.aadhaarNumber} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            </div>
            <div>
              <h4>Education Details</h4>
              <div className={styles.section2}>
                <div className={styles.row}>
                  <InputField 
                    label="Education" 
                    name="education" 
                    value={formData.education} 
                    onChange={handleInputChange} 
                    required
                    error={errors.education}
                  />
                </div>
              </div>
            </div>
          </div>
          <h4>Address</h4>
          <div className={styles.section}> 
            <div className={styles.row}>
              <InputField 
                label="House No, Street, Area" 
                name="houseStreetArea" 
                value={formData.houseStreetArea} 
                onChange={handleInputChange} 
                required
                error={errors.houseStreetArea}
              />
              <InputField 
                label="Village" 
                name="village" 
                value={formData.village} 
                onChange={handleInputChange} 
                required
                error={errors.village}
              />
              <InputField 
                label="District" 
                name="district" 
                value={formData.district} 
                onChange={handleInputChange} 
                required
                error={errors.district}
              />
              <InputField 
                label="State" 
                name="state" 
                value={formData.state} 
                onChange={handleInputChange} 
                required
                error={errors.state}
              />
              <InputField 
                label="Country" 
                name="country" 
                value={formData.country} 
                onChange={handleInputChange} 
                required
                error={errors.country}
              />
              <InputField 
                label="PIN Code" 
                name="pinCode" 
                value={formData.pinCode} 
                onChange={handleInputChange} 
                required
                error={errors.pinCode}
              />
            </div>
          </div>
          <h4>Family Info</h4>
          <div className={styles.section5}>
            <div className={styles.row}>
              <SelectField 
                label="Marital Status" 
                name="maritalStatus" 
                options={['Single', 'Married']} 
                value={formData.maritalStatus} 
                onChange={handleInputChange} 
              />
              <InputField 
                label="Spouse Name" 
                name="spouseName" 
                value={formData.spouseName} 
                onChange={handleInputChange} 
              />
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
              <Button 
                label="Create Profile" 
                primary 
                type="submit" 
                disabled={isButtonDisabled} 
                loading={loading}
                className={isButtonDisabled ? styles.disabledButton : ''}
                data-tooltip={isButtonDisabled ? "Please fill all mandatory fields" : ""}
              />
              <Button 
                label="Cancel" 
                type="button" 
                disabled={loading}
                onClick={handleCancel} 
              />
            </div>
          </div>
        </div>
      </form>
      {showPopup && <SuccessPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default AddStaffForm;
