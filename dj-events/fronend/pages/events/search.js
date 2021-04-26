import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const getServerSideProps = async ({ query: { term } }) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term }
      ]
    }
  })

  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()
  return { props: { events } }
}

const SearchPage = ({ events }) => {
  const router = useRouter()

  if (!events.length) {
    return (
      <Layout>
        <Link href='/'>Go Back</Link>
        <h3>No events to show</h3>
      </Layout>
    )
  }

  return (
    <Layout title='Search Results'>
      <Link href='/'>Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export default SearchPage
