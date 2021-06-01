import React from 'react'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/Events/EventList'
import EventsSearch from '../../components/Events/EventsSearch'

const AllEventsPage = () => {
  const router = useRouter()

  const events = getAllEvents()

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

export default AllEventsPage
