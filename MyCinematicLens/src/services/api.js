const API_KEY = "e0cafdf35b3d37206c7af4f5656d6822"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async(query) => {
    const response = await fetch(
        `${BASE_URL}/movie/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
}