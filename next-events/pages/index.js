import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'
import Head from 'next/head'

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
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='This is the best event' />
      </Head>

      <EventList items={events} />
    </div>
  )
}

export default HomePage
