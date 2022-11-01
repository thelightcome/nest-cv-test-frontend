import Link from 'next/link'

import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link href="/" legacyBehavior>
            <a className={styles.navbar__link}>Main</a>
          </Link>
        </li>
        <li className={styles.navbar__link}>
          <Link href="/tasks" legacyBehavior>
            <a className={styles.navbar__item}>Tasks</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}