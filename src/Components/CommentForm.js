import React from 'react'

export default function CommentForm({comment, setComment}) {
    
  const handleCommentForm = (event) =>{
      event.preventDefault();
      setComment(comment)
    }

  return (
    <form onSubmit={handleCommentForm}>
        <input type="text" placeholder='Add Comment' />
        <input type="submit"/>
    </form>
  )
}
