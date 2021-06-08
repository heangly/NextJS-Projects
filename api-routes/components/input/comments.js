import { useState, useEffect } from 'react'

import CommentList from './comment-list'
import NewComment from './new-comment'
import classes from './comments.module.css'

function Comments(props) {
  const { eventId } = props
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus)
  }

  async function addCommentHandler(commentData) {
    const rawData = await fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await rawData.json()
  }

  useEffect(() => {
    if (showComments) {
      const fetchData = async () => {
        const rawData = await fetch(`/api/comments/${eventId}`)
        const { comments } = await rawData.json()
        setComments(comments)
      }
      fetchData()
    }
  }, [showComments])

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  )
}

export default Comments
