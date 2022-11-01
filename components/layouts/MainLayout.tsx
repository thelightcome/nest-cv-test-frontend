import Navbar from '../Navbar';

import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
  return <div className={styles.mainLayout}>
    <header className={styles.header}>
      <Navbar />
    </header>
    {children}
  </div>
}