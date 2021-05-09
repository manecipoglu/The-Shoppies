import * as types from "./actionTypes";
import * as searchApi from "../../api/searchApi";

export function setSearchResults(searchTerm, searchResults) {
  return { type: types.SET_SEARCH_RESULTS, searchResults };
}

export function setSearchFailure(errorMessage) {
  return { type: types.SET_SEARCH_FAILURE, errorMessage };
}

export function setNominees(nominees) {
  return { type: types.SET_NOMINEES, nominees };
}

export function loadMovies(title) {
  return function (dispatch) {
    return searchApi
      .getMovies(title)
      .then(movies => {
        if (movies.Response !== "False")
          dispatch(setSearchResults(title, movies));
        else dispatch(setSearchFailure(movies.Error));
      })
      .catch(error => {
        throw error;
      });
  };
}
