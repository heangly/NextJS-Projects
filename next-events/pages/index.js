import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

function HomePage({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export default HomePage
