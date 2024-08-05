'use client'
import { useRouter } from 'next/navigation';
//import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { FaHome, FaUsers, FaFileAlt } from 'react-icons/fa'; 

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  //const pathname = usePathname();
console.log(pathname);

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        <ul className={styles.menuList}>
          <li className={`${styles.menuItem} ${pathname === '/overview' ? styles.active : ''}`}>
            <Link href="/overview" className={styles.link}>
              <FaHome className={styles.icon} />
              <span className={styles.label}>Overview</span>
            </Link>
          </li>
          <li className={`${styles.menuItem} ${pathname === '/staff-management' ? styles.active : ''}`}>
            <Link href="/staff-management" className={styles.link}>
              <FaUsers className={styles.icon} />
              <span className={styles.label}>Staff Management</span>
            </Link>
          </li>
          <li className={`${styles.menuItem} ${pathname === '/reports' ? styles.active : ''}`}>
            <Link href="/reports" className={styles.link}>
              <FaFileAlt className={styles.icon} />
              <span className={styles.label}>Reports</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
