import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { parseCookies } from '../../helpers/index'
import styles from '@/styles/Dashboard.module.css'
import DashboardEvent from '@/components/DashboardEvent'

const DashBoardPage = ({ events }) => {
  const handleDeleteEvent = (id) => {
    console.log(id)
  }

  return (
    <Layout title='User Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
        {events.map((event) => (
          <DashboardEvent
            key={event.id}
            evt={event}
            handleDeleteEvent={handleDeleteEvent}
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const events = await res.json()

  return {
    props: {
      events
    }
  }
}

export default DashBoardPage
