import React, { useRef, useState } from 'react'

const HomePage = () => {
  const [feedbackItems, setFeedbackItems] = useState([])
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  const submitFormHandler = async (event) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value

    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback })
    }

    const response = await fetch('/api/feedback', config)
    await response.json()
    emailInputRef.current.value = ''
    feedbackInputRef.current.value = ''
  }

  const loadFeedbackHandler = async () => {
    const response = await fetch('/api/feedback')
    const data = await response.json()
    setFeedbackItems(data.feedback)
  }

  return (
    <div style={{ marginLeft: '50px' }}>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div style={{ marginBottom: '50px' }}>
          <label htmlFor='email'>Your Email Address</label>
          <br />
          <input type='email' id='email' ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <br />
          <textarea
            type='text'
            id='feedback'
            rows='5'
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button type='submit'>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
