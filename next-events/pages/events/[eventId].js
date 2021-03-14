import Link from 'next/link'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/EventDetail/event-summary'
import EventLogistics from '../../components/EventDetail/event-logistics'
import EventContent from '../../components/EventDetail/event-content'

const EventDetailPage = () => {
  const router = useRouter()

  const { eventId } = router.query
  const event = getEventById(eventId)

  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
