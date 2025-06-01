import React from 'react'
import{createContext, useState, useContext, useEffect} from 'react'

const Moviecontext = createContext();

export const useMovieContext = () => useContext(Moviecontext);

export const MovieProvider = ({children}) => {
   
   const [favMovies, setFavMovies] = useState([]);

   useEffect(() => {
    const storedFavMovies = localStorage.getItem('favMovies');
    if(storedFavMovies) {
        setFavMovies(JSON.parse(storedFavMovies));
    }
   }, []);
   

   useEffect(() => {
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
   }, [favMovies]);

   const addToFavorites = (movie) => {
    setFavMovies((prev) => [...prev, movie]);
   }

   const removeFromFavorites = (movieId) => {
    setFavMovies((prev) => prev.filter((m) => m.id !== movieId));
   }

   const isFavorite = (movieId) => {
    return favMovies.some((m) => m.id === movieId);
   }    

   const value = {
    favMovies,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
   }

   return <Moviecontext.Provider value={value}>
        {children}
     </Moviecontext.Provider> 
}
