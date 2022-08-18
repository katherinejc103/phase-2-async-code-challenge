import React from "react";
import { useState } from 'react'
import Comments from './Comments'

function MovieCard({movie}) {
  const [comments, setComments] = useState([])

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <p>
        <strong>{movie.description}</strong>
      </p>
      <button>{movie.watched}</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default MovieCard;