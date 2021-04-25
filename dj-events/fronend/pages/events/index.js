import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  return { props: { events }, revalidate: 1 }
}

const EventPage = ({ events }) => {
  if (!events.length) {
    return (
      <Layout>
        <h3>No events to show</h3>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>All Events</h1>
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export default EventPage
