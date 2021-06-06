import React from 'react'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/Events/EventList'
import EventsSearch from '../../components/Events/EventsSearch'

const AllEventsPage = ({ events }) => {
  const router = useRouter()
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <React.Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()
  return {
    props: { events },
    revalidate: 60
  }
}

export default AllEventsPage
