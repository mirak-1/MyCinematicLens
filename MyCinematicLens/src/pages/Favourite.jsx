import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourite() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return <div className="movies-grid">
                    {favorites.map(movie => 
                        (<MovieCard movie={movie} key={movie.id} />)
                    )}
                </div>
    }
    return <div className = "favorite-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
}

export default Favourite