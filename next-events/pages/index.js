import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'
import Head from 'next/head'

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next-Events</title>
        <meta name='description' content='The best event' />
      </Head>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage
