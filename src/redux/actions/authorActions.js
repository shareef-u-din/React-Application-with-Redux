import * as types from "./actionTypes";
import * as courseApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors: authors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
