
function MovieCard({ movie, onSelectMovie }) {
    return (
    <>
        <li className="movie-item">
            <button type="button" onClick={() => onSelectMovie(movie)}>
                <img src={movie.poster}></img>
                <h3>{movie.title}</h3>
            </button>
          
        </li>
    </>);

}

export default MovieCard;