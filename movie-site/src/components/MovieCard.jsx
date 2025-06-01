import React from 'react';
import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/Moviecontext';

const MovieCard = ({ movie }) => {
  const {addToFavorites, removeFromFavorites, isFavorite} = useMovieContext();
  const favorite = isFavorite(movie.id);
  
  const onFavClick = (e) => {
    e.preventDefault();
    if(favorite) {
        removeFromFavorites(movie.id);
    } else {
        addToFavorites(movie);
    }
  }

  const formatRating = (rating) => {
    return rating.toFixed(1);
  }
  
  return (
    <div className="movie-card">
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        
        <div className='movie-overlay'>
          <button className={`fav-btn ${favorite ? 'active' : ''}`} onClick={onFavClick}>
            ♡
          </button>
          
          <div className="movie-details">
            <div className="rating">
              <span className="rating-icon">⭐</span>
              <span className="rating-value">{formatRating(movie.vote_average)}</span>
              <span className="rating-count">({movie.vote_count} votes)</span>
            </div>
            <p className="movie-overview">{movie.overview}</p>
            <div className="movie-meta">
              <span className="release-date">{movie.release_date?.split('-')[0]}</span>
              <span className="language">{movie.original_language.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='movie-info'>
        <h2>{movie.title}</h2>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;