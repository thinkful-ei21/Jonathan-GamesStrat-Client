import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const fetchGamesRequest = () => ({
  type: FETCH_GAMES_REQUEST
});

export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const fetchGamesSuccess = games => ({
  type: FETCH_GAMES_SUCCESS,
  games
});

export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';
export const fetchGamesError = err => ({
  type: FETCH_GAMES_ERROR,
  err
});

export const SAVE_INPUT_VALUE = 'SAVE_INPUT_VALUE';
export const saveInputValue = value => ({
  type: SAVE_INPUT_VALUE,
  value
});

export const CLEAR_INPUT_VALUE = 'CLEAR_INPUT_VALUE';
export const clearInputValue = value => ({
  type: CLEAR_INPUT_VALUE,
  value
});

export const fetchGames = _searchTerm => dispatch => {
  dispatch(fetchGamesRequest());
  const searchTerm = _searchTerm ? `/?search=${_searchTerm}` : '/';
  fetch(`${API_BASE_URL}/games${searchTerm}`, {
    method: 'GET'
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(fetchGamesSuccess(data));
    })
    .catch(err => dispatch(fetchGamesError(err)));
};
