import styles from './Header.module.css';

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
        </div>
        <img src="/images/Export.png" alt="Export"className={styles.logoutIcon} />
      </div>
    </header>
  );
};

export default Header;
