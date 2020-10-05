const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY 


export const popularMovies = () => `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const popularTV = () => `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
export const tvSearch = (query) => `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
export const movieSearch = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`