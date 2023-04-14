import MovieItem from './MovieItem';

const MovieList = ({movies}) => {

  return (
    <div>
      <ul>
        { 
          (Array.isArray(movies) && movies.length > 0) ? movies.map((movie, i) => {
            return <MovieItem key={i} movie={movie} />
          }) : 'no movies'
        }
      </ul>
    </div>
  )
};

export default MovieList;