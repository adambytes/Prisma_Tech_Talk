
const MovieItem = ({ movie }) => {
  return (
    <>
      <li>{movie.title}</li>
      <ul>
        <li>{`Rating: ${movie.rating}`}</li>
        <li>{`Watched: ${movie.watched ? 'yes':'no'}`}</li>
        <li>
          <button>Watched</button>
        </li>
      </ul>
    </>
  )
}

export default MovieItem;