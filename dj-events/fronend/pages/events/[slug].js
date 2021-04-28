import Layout from '@/components/Layout'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API_URL } from '@/config/index'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()
  const paths = events.map((event) => ({ params: { slug: event.slug } }))
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${API_URL}/events?slug=${slug}`)
  const events = await res.json()
  return { props: events[0], revalidate: 1 }
}

const EventPage = (props) => {
  const router = useRouter()

  const deleteEvent = async (e) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/events/${props.id}`, {
        method: 'DELETE'
      })
      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        router.push('/events')
      }
    }
  }

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${props.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {new Date(props.date).toLocaleDateString('en-us')} at {props.time}
        </span>

        <h1>{props.name}</h1>
        <ToastContainer />

        {props.image && (
          <div className={styles.image}>
            <Image
              src={props.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{props.performers}</p>
        <h3>Description:</h3>
        <p>{props.description}</p>
        <h3>Venue: {props.venue}</h3>
        <p>{props.address}</p>

        <Link href='/events'>
          <a className='styles.back'> {'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export default EventPage
