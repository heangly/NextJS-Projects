import Link from 'next/link'
import styles from './EventItem.module.css'

const EventItem = ({ id, image, title, date, location }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAddres = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt='' />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddres}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
