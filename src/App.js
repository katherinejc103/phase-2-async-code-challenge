import React, {useState, useEffect} from 'react';
import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
 

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  },[])



  

  function handleAddMovie(movie){
    setMovies([...movies, movie])
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieContainer movies={movies} setMovies={setMovies} search={search} setSearch={setSearch}/>}/>
        <Route path="/movies/new" element={<MovieForm movies={movies} setMovies={setMovies} handleAddMovie={handleAddMovie}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;