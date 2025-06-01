import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { getMovies, searchMovies } from '../services/api'
import '../css/Home.css'

function Home() {
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadmovies = async () => {
      try{
        const popularMovies = await getMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError("Failed to fetch movies");
      }finally{
        setLoading(false);
      }
    };
    loadmovies();
  }, []);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      const popularMovies = await getMovies();
      setMovies(popularMovies);
      return;
    }
    
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchTerm);
      setMovies(searchResults);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  }
  
  return (
    <div className='home'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className='search-input'
          placeholder="Search for movies..."
          value={search}
          onChange={handleInputChange}
        />
        <button type='submit' className='search-btn'>Search</button>
      </form>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className='movies-grid'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home