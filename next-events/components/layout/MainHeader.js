import Link from 'next/link'
import styles from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <Link href='/events'>Browse All Eevents</Link>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
