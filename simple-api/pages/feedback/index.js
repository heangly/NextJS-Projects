import { extractFeedback, buildFeedbackPath } from '../api/feedback'

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)
  return {
    props: { feedbackItems: data }
  }
}

const FeedbackPage = (props) => {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default FeedbackPage
