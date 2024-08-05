'use client'
import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/navbar/Sidebar';
import styles from './styles/layout.module.css';


export default function Layout({ children }) {
  return (
    <html>
      <body>
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child)
              : child
          )}
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
