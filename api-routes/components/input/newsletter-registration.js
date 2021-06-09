import { useRef, useContext } from 'react'
import NotificationContext from '../../store/notification-context'
import classes from './newsletter-registration.module.css'

function NewsletterRegistration() {
  const emailInputRef = useRef()
  const { showNotification, hideNotification } = useContext(NotificationContext)

  const registrationHandler = async (e) => {
    e.preventDefault()
    showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter',
      status: 'pending'
    })
    const emailInput = emailInputRef.current.value

    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailInput })
      }

      const rawData = await fetch('/api/newsletter', config)
      await rawData.json()

      showNotification({
        title: 'Success!.',
        message: 'Successfully registered for newsletter',
        status: 'success'
      })

      emailInputRef.current.value = ''
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.message || 'Something went wrong!',
        status: 'error'
      })
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}

export default NewsletterRegistration
