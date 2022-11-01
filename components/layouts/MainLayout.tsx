import React from 'react';
import Navbar from '../Navbar';

import styles from './MainLayout.module.scss';

interface MyProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MyProps) {
  return <div className={styles.mainLayout}>
    <header className={styles.header}>
      <Navbar />
    </header>
    {children}
  </div>
}