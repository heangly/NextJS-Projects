import classes from './ContactForm.module.css'
import { useState, useEffect } from 'react'
import Notification from '../ui/Notification'

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState(null)
  const [requestError, setRequestError] = useState(null)

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  const sendContactData = async (contactDetails) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactDetails)
    }
    const response = await fetch('/api/contact', config)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong')
    }
  }

  const sendMessageHandler = async (event) => {
    event.preventDefault()

    setRequestStatus('pending')
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      })
      setRequestStatus('success')
      setEnteredEmail('')
      setEnteredName('')
      setEnteredMessage('')
    } catch (error) {
      setRequestStatus('error')
      setRequestError(error.message)
    }
  }

  let notification
  switch (requestStatus) {
    case 'pending':
      notification = {
        status: 'pending',
        title: 'Sending message...',
        message: 'Your message is on its way!'
      }
      break

    case 'success':
      notification = {
        status: 'success',
        title: 'Success!',
        message: 'Message sent successfully'
      }
      break

    case 'error':
      notification = {
        status: 'error',
        title: 'Error!',
        message: requestError
      }
      break

    default:
      break
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}

export default ContactForm
