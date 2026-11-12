import MovieCard from "./MovieCard";


function MovieList({ movies, title, fallbackText, onSelectMovie }) {


    return (<section className="movies=category">
        <h2>{title}</h2>
        <ul className="movies">
            {/*render list movies */}
            {movies.length === 0 ?
                (<p className="fallback-text">{fallbackText}</p>)
                :
                movies.map((movie) => (<MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie}/>))
            }
        </ul>
    </section>
    );
}


export default MovieList;