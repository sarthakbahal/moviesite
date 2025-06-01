import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites' 
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'  
import { MovieProvider } from './contexts/Moviecontext'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <MovieProvider>
      
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
      
      
    </MovieProvider>
  ) 
}

export default App
