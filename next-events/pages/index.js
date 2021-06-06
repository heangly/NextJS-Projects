import EventList from '../components/Events/EventList'
import { getFeaturedEvents } from '../helpers/api-util'

const HomePage = (props) => {
  const { featuredEvents } = props
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getFeaturedEvents()

  return {
    props: {
      featuredEvents: data
    },
    revalidate: 1800
  }
}

export default HomePage
