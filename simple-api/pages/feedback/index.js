import { extractFeedback, buildFeedbackPath } from '../api/feedback'
import { useState } from 'react'

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)
  return {
    props: { feedbackItems: data }
  }
}

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState()

  const loadFeedbackHanlder = async (id) => {
    const response = await fetch(`/api/${id}`)
    const data = await response.json()
    setFeedbackData(data.feedback)
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => loadFeedbackHanlder(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FeedbackPage
