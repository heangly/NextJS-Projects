import { Fragment } from 'react'

import { getEventById, getFeaturedEvents } from '../../helpers/api-util'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId
  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
}

function EventDetailPage({ selectedEvent }) {
  if (!selectedEvent) {
    return (
      <div className='center'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
