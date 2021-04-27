import Layout from '@/components/Layout'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

const AddEventPage = () => {
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: ''
  })

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element.trim() === ''
    )

    hasEmptyFields && toast.error('Please fill in all fields')

    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if (!res.ok) {
      toast.error('Something went wrong')
    } else {
      const evt = await res.json()
      router.push(`/events/${evt.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title='Add New Event'>
      <Link href='/events'>Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              id='name'
              type='text'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='performers'>Performers</label>
            <input
              id='performers'
              type='text'
              name='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='venue'>Venue</label>
            <input
              id='venue'
              type='text'
              name='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='address'>Address</label>
            <input
              id='address'
              type='text'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='date'>Date</label>
            <input
              id='date'
              type='date'
              name='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='time'>Time</label>
            <input
              id='time'
              type='text'
              name='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>Event Description</label>
          <textarea
            id='description'
            type='date'
            name='description'
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type='submit' value='Add Event' className='btn' />
      </form>
    </Layout>
  )
}

export default AddEventPage
