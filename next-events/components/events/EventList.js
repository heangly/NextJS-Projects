import EventItem from './EventItem'

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default EventList
