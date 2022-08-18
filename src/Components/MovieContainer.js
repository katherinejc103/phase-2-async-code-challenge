import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";


function MovieContainer({movies, search, setSearch}) {
  const movieCards = movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
  
  console.log(movies)
  return (
    <div>
      <h1>Watchlist</h1>
      <Search movies={movies} search={search} setSearch={setSearch}  /><br/>
      <Filter movies={movies} search={search} setSearch={setSearch}/>
      <li>
      {movieCards}
      </li>
      
    </div>
  );
}

export default MovieContainer;
