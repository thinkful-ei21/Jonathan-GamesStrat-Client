import { API_BASE_URL } from '../config';

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

export const fetchGames = _searchTerm => dispatch => {
  dispatch(fetchGamesRequest());
  const searchTerm = `/?search=${_searchTerm}`;
  fetch(`${API_BASE_URL}/games${searchTerm}`, { method: 'GET' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchGamesSuccess(data));
    })
    .catch(err => dispatch(fetchGamesError(err)));
};
