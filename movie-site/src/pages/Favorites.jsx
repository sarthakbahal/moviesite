import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/Moviecontext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favMovies } = useMovieContext();

  if (favMovies.length > 0) {
    return (
      <div className='fav-container'>
        <h2>Your favorite movies:</h2>
        <div className='movies-grid'>
          {favMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className='fav-empty'>
      <h1>No favorites yet</h1>
      <p>Add some movies to your favorites list</p>
    </div>
  )
}

export default Favorites