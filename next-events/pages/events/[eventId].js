import { getEventById, getFeaturedEvents } from '../../helpers/api-util'
import EventSummary from '../../components/EventDetail/EventSummary'
import EventLogistics from '../../components/EventDetail/EventLogistics'
import EventContent from '../../components/EventDetail/EventContent'
import React from 'react'

const EventDetailPage = ({ event }) => {
  if (!event)
    return (
      <div className='center'>
        <p>loading...</p>
      </div>
    )

  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  )
}

export async function getStaticProps(context) {
  const { eventId } = context.params
  const event = await getEventById(eventId)
  return {
    props: { event },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default EventDetailPage
