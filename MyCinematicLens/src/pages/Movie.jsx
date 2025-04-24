import { useLocation } from "react-router-dom"
import '../assets/tailwind.css'

function MovieDetail() {
    const location = useLocation()
    const movie = location.state?.movieData

    if (!movie) {
        console.log("error")
    }

    return <div>
        <div className="grid grid-flow-col grid-rows-3 gap-2">
                <img 
                    src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt = {movie.title} 
                    className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-md w-4xs row-span-3"
                />
            <div className="col-span-2 flex-col space-y-8">
                <h1 className="text-red-500 text-3xl mb-6">{movie.title}</h1>

                <br></br>
                <div className="text-stone-100 mb-4">{movie.overview}</div>
                <br></br>

                <div className="text-stone-100 mb-4">Release Date: {(movie.release_date)}</div>
                <div className="text-stone-100">Original language: {(movie.original_language).toUpperCase()}</div>
                <div className="text-stone-100 mt-2">TMDB popularity: {movie.popularity}</div>
               
            </div>
        </div>
    </div>
}

export default MovieDetail