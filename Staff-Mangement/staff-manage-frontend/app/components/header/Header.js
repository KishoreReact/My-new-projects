import styles from '../../styles/Header.module.css';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <img src="/images/Mask-group.png" alt="Company Logo" className={styles.companyLogo} />
      </div>
      <div className={styles.rightSection}>
      <img src="/images/Notification.png" alt="Notification Logo" className={styles.notificationIcon} />
        <div className={styles.profile}>
        <img src="/images/frameLog.png" alt="Log"  />
          {/* <img src="/images/profile-pic.png" alt="Profile" className={styles.profilePic} />
          <div className={styles.profileDetails}>
            <div className={styles.profileName}>[User Name]</div>
            <div className={styles.profilePosition}>Position</div>
          </div> */}
        </div>
        <img src="/images/Export.png" alt="Export"className={styles.logoutIcon} />
      </div>
    </header>
  );
};

export default Header;
