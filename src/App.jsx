import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";
import MovieList from "./components/MovieList";
import { MOVIES } from "./data";
import { filterByDistance, calculateDistance } from "./utils";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmationModal";

const STORAGE_KEY = "selected-movies-ids";

const movieIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];


function App() {

  const [watchListIds, setWatchlistIds] = useState(movieIds);
  const [availableMovies, setAavailableMovies] = useState([]);
  const [movieToRemove, setMovieToRemove] = useState(null);
  const dialog = useRef();

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
    const ids = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids.includes(movie.id) ? ids : [...ids, movie.id]));

  }

  function startMovieRemoval(movie) {
    setMovieToRemove(movie);
    dialog.current.open();
  }

  function proceedWithMovieRemoval() {
    if (movieToRemove) {
      setWatchlistIds((currentIds) => currentIds.includes(movieToRemove.id) ? currentIds.filter((id) => id !== movieToRemove.id) : currentIds);
      const ids = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids.includes(movieToRemove.id) ? ids.filter(id => id !== movieToRemove.id) : ids));
    }
    setMovieToRemove(null);
    dialog.current.close();
  }


  function handleCancelMovieRemoval() {
    setMovieToRemove(null);
    dialog.current.close();
  }



  return (
    <>
      <Modal ref={dialog}>
        <DeleteConfirmation 
          onConfirm={proceedWithMovieRemoval} 
          onCancel={handleCancelMovieRemoval} 
          movieTitle={ movieToRemove && movieToRemove.title }>
        </DeleteConfirmation>
      </Modal>
      <header>
        <h1>My Watchlist</h1>
        <img src={logo} alt='movie logo' />
        <p>Choose the movies you want to watch and keep them in one place.</p>
      </header>

      <main>
        <MovieList title="Watchlist" movies={watchlistMovies} fallbackText="Your watchlist is empty. Add movies from the list below." onSelectMovie={startMovieRemoval} />
        <MovieList title="Availabel movies list" movies={availableMovies} fallbackText="Loading..." onSelectMovie={handleMovieAdd} />

      </main>
      {/* <dialog
        className="modal"
        aria-labelledby="delete-confirmation-title"
        ref={dialog}
      >
        <section id="delete-confirmation">
          <h2 id="delete-confirmation-title">Remove from watchlist?</h2>
          <p>
            Are you sure you want to remove <strong>{movieToRemove ? movieToRemove.title : ''}</strong> from your watchlist?
          </p>
          <div id="confirmation-actions">
            <button
              className="button button-text"
              type="button"
              onClick={handleCancelMovieRemoval}
            >
              Cancel
            </button>
            <button
              className="button"
              type="button"
              onClick={proceedWithMovieRemoval}
            >
              Remove
            </button>
          </div>
        </section>

      </dialog> */}


    </>
  );
}

export default App;
