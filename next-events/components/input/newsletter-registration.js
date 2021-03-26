import classes from './newsletter-registration.module.css'
import { useRef } from 'react'

function NewsletterRegistration() {
  const emailInputRef = useRef()

  async function registrationHandler(event) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value

    const config = {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('/api/newsletter', config)
    const data = await response.json()
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}

export default NewsletterRegistration
