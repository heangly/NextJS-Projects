import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState([])

  const router = useRouter()

  const filterData = router.query.slug

  const { data, error } = useSWR(
    'https://nextjs-cours-default-rtdb.firebaseio.com/events.json'
  )

  useEffect(() => {
    if (data) {
      const events = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key]
        }
      })
      setLoadedEvents(events)
    }
  }, [data])

  if (!filterData) {
    return <p className='center'>Loading...</p>
  }

  const [filteredYear, filteredMonth] = filterData

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  let filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    )
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
