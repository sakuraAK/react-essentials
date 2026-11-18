import { useEffect, useRef, useState } from "react";
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
        //Montreal dist: ~7
        //New York dist: ~531
        //console.log(calculateDistance(position.coords.latitude, position.coords.longitude, 40.7143, -74.006));
        setAavailableMovies(MOVIES.filter((movie) =>
          filterByDistance(position.coords.latitude, position.coords.longitude, movie.lat, movie.lon, 7)));
      });
    }
    ,
    []
  );



  const watchlistMovies = MOVIES.filter((movie) => watchListIds.includes(movie.id));

  function handleMovieAdd(movie) {
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
        <MovieList title="Availabel movies list" movies={availableMovies} fallbackText="Loading..." onSelectMovie={handleMovieAdd}/>
       
      </main>
      <dialog
        className="modal"
        aria-labelledby="delete-confirmation-title"
      >
        <section id="delete-confirmation">
          <h2 id="delete-confirmation-title">Remove from watchlist?</h2>
          <p>
            Are you sure you want to remove <strong>Movie Title</strong>{' '}
            from your watchlist?
          </p>
          <div id="confirmation-actions">
            <button
              className="button button-text"
              type="button"
            >
              Cancel
            </button>
            <button
              className="button"
              type="button"
            >
              Remove
            </button>
          </div>
        </section>

      </dialog>


    </>
  );
}

export default App;
