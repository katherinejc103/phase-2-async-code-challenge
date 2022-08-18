import React from 'react'

function Search({search, setSearch, movies}) {
  

  // const filteredMoviesSearch = movies.filter((search) => {
  //   if (search === "") {
  //     return search
  //   } else if (movies.title.toLowerCase().includes(search.toLowerCase())) {
  //     return search
  //   }
  //  })

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  const renderMovieList = (movies) =>{
    return movies.filter(movie => movie.title.toLowerCase().includes(search)).map(movie =>{
      return (
        <div>{movie.title}</div>
      )
    })
  }

  return (
    <div>
        <input 
          type="text"
          value={search} 
          onChange={handleChange}
          placeholder="Search for movie by title" 
          style={{width: '250px'}}
          />
         {renderMovieList(movies)}
    </div>
  )
}

export default Search;
