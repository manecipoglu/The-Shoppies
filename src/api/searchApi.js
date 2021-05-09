import { handleResponse, handleError } from "./apiUtils";

export function getMovies(title) {
  return fetch(
    `http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
  )
    .then(handleResponse)
    .catch(handleError);
}
