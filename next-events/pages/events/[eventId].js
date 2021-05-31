import { useRouter } from 'next/router'

const EventDetailPage = () => {
  const { eventId } = useRouter().query
  return (
    <div>
      <h1>Event Detail Page {eventId}</h1>
    </div>
  )
}
export default EventDetailPage
