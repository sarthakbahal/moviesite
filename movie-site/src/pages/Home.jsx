import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
  
  const movies = [
    {id: 1, title: 'The Dark Knight', description: 'A superhero movie about a bat'},
    {id: 2, title: 'Star Wars : The Force Awakens', description: 'The first movie of the Star Wars franchise'},
    {id: 3, title: 'Joker', description: 'DC Comics Villain movie'},
    {id: 4, title: 'Inside Out', description: 'A story about a girl and her emotions'},
    {id: 5, title: 'Inglorious Bastards', description: 'A movie about a group of Jewish-American soldiers who kill Nazis'},
  ]
  
 

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(search);
  }
  
  return (
    
    <div className='home'>
        
        <form onSubmit={handleSearch} className='search'>
            <input type='text' placeholder='Search for a movie...' className='search-input' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
            
        </form>
        
        
        <div className='movies-grid'>
            {movies.map(
                (movie) => 
                    movie.title.toLowerCase().includes(search.toLowerCase()) && (
                        <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default Home