import MovieList from "./MovieList";
import axios from 'axios';
import { useEffect, useState } from 'react';

const getMovies = async () => {
  try {
    const response = await axios.get('/api/movie');
    return response.data;
  }
  catch(err) {
    console.log(err);
  }
}

const AddMovie = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const movies = await getMovies();
      setMovieList(movies);
    }
    getMovieList();
  });


  const handleAddMovie = async (e) => {
    e.preventDefault();
    // Form data
    const movie = new FormData(e.target);
    // Send data to server
    const addMovieData = {
      title: movie.get('title'),
      rating: Number(movie.get('rating')),
    }
    let response;
    try {
      response = await axios.post('/api/movie', addMovieData);
      const movies = getMovies();
      setMovieList(movies);
      // console.log(`handleAddMovie: ${response}`);
    }
    catch(err) {
      console.log(err);
    }
    // if successful, retrieve new movie list
  
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleAddMovie}>
        <div className="title">
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="rating">
          <label htmlFor="rating">Rating: </label>
          <input type="text" id="title" name="rating" />
        </div>
        <button type="submit">Add Movie</button>
      </form>
      <hr />
      <MovieList movies={movieList}/>
    </div>
  )
}

export default AddMovie;