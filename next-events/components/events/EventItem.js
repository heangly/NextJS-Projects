import Button from '../UI/Button'
import DateIcon from '../ICONS/date-icon'
import AddressIcon from '../ICONS/address-icon'
import ArrowRightIcon from '../ICONS/arrow-right-icon'
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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddres}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            {' '}
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
