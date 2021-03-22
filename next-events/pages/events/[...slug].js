import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/results-title'

const FilteredEventsPage = () => {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <h1 className='center'>Loading...</h1>
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
    numMonth > 12
  ) {
    return <h1>Invalid Filter, please adjust your value</h1>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <h1>No events found for the chosen filter!</h1>
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
