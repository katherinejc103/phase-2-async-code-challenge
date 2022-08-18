import React, {useState} from "react";

function MovieForm({handleAddMovie}) {
  const initialState = {
    title: "",
    description: "",
    genre: "",
    watched: "",
    image: "",
  }

  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    setForm({
      ...form, [event.target.name] : event.target.value
      })
    }

  const handleSubmit = (event)=>{
    event.preventDefault();
    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(form),
    }) 
      .then((res) => res.json())
      .then((movie) => handleAddMovie(movie));
      setForm(initialState);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="new-movie-form">
        <h3>Add Movie</h3>
      <input onChange={handleChange} placeholder="Title" name={form.title}/><br/>
      <select onChange={handleChange} name="genre">
        <option value="" disabled selected>Select Genre:</option>
      <option>Action</option>
      <option>Horror</option>
      <option>Drama</option>
      <option>Comedy</option>
      </select><br/>
      <label>Watched?
      <input onChange={handleChange} type="checkbox" name={form.genre}/>
      </label><br/>
      <input onChange={handleChange} placeholder="Image" name={form.image}/><br/>
      <textarea placeholder="Description" rows={10} name={form.description}/><br/>
      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default MovieForm;
