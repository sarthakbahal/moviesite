import React, { useState, useMemo } from 'react'
import { useMovieContext } from '../contexts/Moviecontext'
import MovieCard from '../components/MovieCard'
import '../css/Favorites.css'

const Favorites = () => {
  const { favMovies } = useMovieContext();
  const [sortBy, setSortBy] = useState('recent'); // 'recent', 'rating', 'year'

  const sortedMovies = useMemo(() => {
    if (!favMovies.length) return [];

    const movies = [...favMovies];
    switch (sortBy) {
      case 'rating':
        return movies.sort((a, b) => b.vote_average - a.vote_average);
      case 'year':
        return movies.sort((a, b) => {
          const yearA = a.release_date?.split('-')[0] || '0';
          const yearB = b.release_date?.split('-')[0] || '0';
          return yearB.localeCompare(yearA);
        });
      case 'recent':
      default:
        // Since we don't have a timestamp for when movies were added,
        // we'll use the order they were added (reverse chronological)
        return movies.reverse();
    }
  }, [favMovies, sortBy]);

  const handleSort = (type) => {
    setSortBy(type);
  };

  return (
    <div className='favorites-container'>
      <div className='favorites-header'>
        <h1>Your Favorites</h1>
        <p className='favorites-subtitle'>Movies that caught your heart</p>
      </div>

      <div className='favorites-content'>
        {favMovies.length === 0 ? (
          <div className='favorites-empty'>
            <div className='empty-icon'>🎬</div>
            <h2>Your collection is empty</h2>
            <p>Start adding movies to your favorites to see them here</p>
            <div className='empty-actions'>
              <button className='browse-btn'>Browse Movies</button>
              <button className='discover-btn'>Discover New</button>
            </div>
          </div>
        ) : (
          <>
            <div className='favorites-stats'>
              <div 
                className={`stat-card ${sortBy === 'rating' ? 'active' : ''}`}
                onClick={() => handleSort('rating')}
              >
                <span className='stat-icon'>⭐</span>
                <div className='stat-info'>
                  <h3>Top Rated</h3>
                  <p>Your highest rated movies</p>
                </div>
              </div>
              <div 
                className={`stat-card ${sortBy === 'recent' ? 'active' : ''}`}
                onClick={() => handleSort('recent')}
              >
                <span className='stat-icon'>🎯</span>
                <div className='stat-info'>
                  <h3>Recently Added</h3>
                  <p>Your latest favorites</p>
                </div>
              </div>
              <div 
                className={`stat-card ${sortBy === 'year' ? 'active' : ''}`}
                onClick={() => handleSort('year')}
              >
                <span className='stat-icon'>📅</span>
                <div className='stat-info'>
                  <h3>By Year</h3>
                  <p>Organize by release date</p>
                </div>
              </div>
            </div>

            <div className='movies-grid'>
              {sortedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Favorites