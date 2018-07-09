import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_ONE_GAME_REQUEST = 'FETCH_ONE_GAME_REQUEST';
export const fetchOneGameRequest = () => ({
  type: FETCH_ONE_GAME_REQUEST
});

export const FETCH_ONE_GAME_SUCCESS = 'FETCH_ONE_GAME_SUCCESS';
export const fetchOneGameSuccess = game => ({
  type: FETCH_ONE_GAME_SUCCESS,
  game
});

export const FETCH_ONE_GAME_ERROR = 'FETCH_ONE_GAME_ERROR';
export const fetchOneGameError = err => ({
  type: FETCH_ONE_GAME_ERROR,
  err
});

export const fetchOneGame = gameId => dispatch => {
  dispatch(fetchOneGameRequest());
  fetch(`${API_BASE_URL}/games/${gameId}`, { method: 'GET' })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchOneGameSuccess(data));
    })
    .catch(err => dispatch(fetchOneGameError(err)));
};
