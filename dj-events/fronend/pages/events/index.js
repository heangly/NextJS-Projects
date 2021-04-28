import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import Pagnination from '@/components/Pagnination'
import { API_URL } from '@/config/index'

const PER_PAGE = 3
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  // calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json()

  // fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const events = await eventRes.json()
  return { props: { events, page: +page, total } }
}

const EventPage = ({ events, page, total }) => {
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

      <Pagnination page={page} total={total} PER_PAGE={PER_PAGE} />
    </Layout>
  )
}

export default EventPage
