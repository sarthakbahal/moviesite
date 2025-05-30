import React from 'react';

const MovieCard = ({ movie }) => {
  
  const onFavClick = () => {
    alert('Fav clicked');
  }
  
    return (
        <div className="movie-card">
      
            <div className='movie-poster'>
                <img src={movie.poster} alt={movie.title} />
            
                <div className='movie-overlay'>
                    <button className='fav-btn' onClick={onFavClick}>
                        ♡
                    </button>
                    
                </div>
                <div className='movie-info'>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
      
      
        
  );
};

export default MovieCard;