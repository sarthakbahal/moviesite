import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  const movinum = 2;

  const movie = {
    title: 'The Dark Knight',
    description: 'A superhero movie about a bat',
    poster: 'https://www.bing.com/images/search?q=the+dark+knight+movie+poster&id=56CADF79382A76B7F20B5CA5E1E1A95B3FEC92A3&FORM=IACFIR'
  }

  return (
    <>
      {movinum === 1 ?(
        <MovieCard movie={movie} />
      ):(
        <MovieCard movie={{title: 'The Dark Knight',
        description: 'A suhero movie about a bat',
        poster: 'https://www.bing.com/images/search?q=the+dark+knight+movie+poster&id=56CADF79382A76B7F20B5CA5E1E1A95B3FEC92A3&FORM=IACFIR'} }/>
      )}
    </>
  ) 
}

export default App
