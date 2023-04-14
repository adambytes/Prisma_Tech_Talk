import MovieItem from './MovieItem';

const MovieList = ({movies}) => {

  return (
    <div>
      <ul>
        { 
          movies.map((movie) => {
            return <MovieItem movie={movie} />
          })
        }
      </ul>
    </div>
  )
};

export default MovieList;