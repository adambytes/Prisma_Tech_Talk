import React, { useState } from 'react';
import axios from 'axios';



const MovieItem = ({ movie }) => {
  const [watched, setWatched] = useState(movie.watched);

  const handleDeleteMovie = async (e) => {
    e.preventDefault();
    const movieId = movie.id;
    try {
      const response = await axios.delete(`/api/movie/${movieId}`);
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleWatchedMovie = async (e) => {
    e.preventDefault();
    const movieId = movie.id;
    try {
      const response = await axios.patch(`/api/movie/${movieId}`);
      // console.log(`handleWatchedMovie: ${response}`)
    }
    catch(err) {
      console.log(err);
    }
    e.target.key += 2;
  }
  return (
    <>
      <li>{`Movie: "${movie.title}"`}</li>
      <ul>
        <li>{`Rating: ${movie.rating}`}</li>
        <li>{`Watched: ${movie.watched ? 'yes':'no'}`}</li>
        <li>
          <button key={1} className='watchedButton' onClick={handleWatchedMovie} disabled={movie.watched}>Watched</button>
          <button key={2} className='deleteButton' onClick={handleDeleteMovie}>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default MovieItem;