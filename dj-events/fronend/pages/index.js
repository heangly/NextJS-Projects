import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { API_URL } from '@/config/index'

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()
  return { props: { events }, revalidate: 1 }
}

const HomePage = ({ events }) => {
  if (!events.length) {
    return (
      <Layout>
        <h3>No events to show</h3>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      <Link href='/events'>
        <a className='btn-secondary'>View All Events</a>
      </Link>
    </Layout>
  )
}

export default HomePage
