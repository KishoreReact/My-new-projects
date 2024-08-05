import React from 'react';
import styles from './SuccessPopup.module.css'; 

const SuccessPopup = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2>Staff added successfully</h2>
        <button onClick={onClose} className={styles.okButton}>OK</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
