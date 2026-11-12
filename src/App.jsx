import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import MovieList from "./components/MovieList";
import { MOVIES } from "./data";
import { filterByDistance, calculateDistance } from "./utils";


function App() {

  const [watchListIds, setWatchlistIds] = useState([]);
  const [availableMovies, setAavailableMovies] = useState([]);

  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setAavailableMovies(MOVIES.filter((movie) => 
          filterByDistance(position.coords.latitude, position.coords.longitude, movie.lat, movie.lon, 7)));
      });
    }
   ,
   []
  );

  

  const watchlistMovies = MOVIES.filter((movie) => watchListIds.includes(movie.id));
 
  function hanldeMovieAdd(movie) {
    setWatchlistIds((currentIds) => currentIds.includes(movie.id) ? currentIds : [...currentIds, movie.id]);
  }

  function handleMovieRemoval(movie) {
    setWatchlistIds((currentIds) => currentIds.includes(movie.id) ? currentIds.filter((id) => id !== movie.id) : currentIds);
  }

  //console.log(MOVIES);

  return (
    <>
      <header>
        <h1>My Watchlist</h1>
         <img src={logo} alt='movie logo' />
        <p>Choose the movies you want to watch and keep them in one place.</p>
      </header>

      <main>
        <MovieList title="Watchlist" movies={watchlistMovies} fallbackText="Your watchlist is empty. Add movies from the list below." onSelectMovie={handleMovieRemoval}/>
        <MovieList title="Availabel movies list" movies={availableMovies} fallbackText="Loading..." onSelectMovie={hanldeMovieAdd}/>
       
      </main>

    </>
  );
}

export default App;
