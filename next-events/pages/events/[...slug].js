import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '../../components/Events/EventList'

const FilteredEventsPage = ({ filteredEvents }) => {
  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for chosen filter!</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { slug: filteredData } = context.params

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
    return {
      notFound: true
      // redirect: {
      //   destination: '/error'
      // }
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  return {
    props: { filteredEvents }
  }
}

export default FilteredEventsPage
