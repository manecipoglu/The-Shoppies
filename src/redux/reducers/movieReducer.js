import { initialState } from "./initialState";
import * as types from "../actions/actionTypes";

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SEARCH_RESULTS:
      return { ...state, searchResults: [...action.searchResults.Search] };

    case types.SET_SEARCH_FAILURE:
      return { ...state, searchResults: [action.errorMessage] };

    case types.SET_NOMINEES:
      return { ...state, nominees: action.nominees };

    default:
      return state;
  }
}
