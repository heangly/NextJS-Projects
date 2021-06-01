import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/Events/EventList'

const FilteredEventsPage = () => {
  const { slug: filteredData } = useRouter().query

  if (!filteredData) return <p className='center'>Loading...</p>

  const numYear = +filteredData[0]
  const numMonth = +filteredData[1]

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for chosen filter!</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventsPage
