import React from 'react'

function Filter({movies, filteredMovies, setFilteredMovies}) {

  // const filteredGenre = movies
  // .filter(movie => {
  //   return movie.genre.indexOf(filteredMovies)
  // })
  // .map(movie => {
  //   return (movie => {
  //     <li key={movie.id}>{movie.movie}</li>
  //   })
  // })

  const handleChangeFilter = (event) =>{
    setFilteredMovies(event.target.value)
  }

  const renderMovieFilter = (movies) =>{
    return movies.filter(movie => movie.genre === (handleChangeFilter)).map(movie =>{
      return (
        <div>{movies}</div>
      )
    })
  }


  return (
    <div>
        <select onChange={handleChangeFilter}>
            <option value="" selected>All</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Drama</option>
            <option>Comedy</option>
        </select>
        {renderMovieFilter}
    </div>
  )
}

export default Filter;
