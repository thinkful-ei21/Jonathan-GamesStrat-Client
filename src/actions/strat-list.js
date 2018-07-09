import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_STRATS_REQUEST = 'FETCH_STRATS_REQUEST';
export const fetchStratsRequest = () => ({
  type: FETCH_STRATS_REQUEST
});

export const FETCH_STRATS_SUCCESS = 'FETCH_STRATS_SUCCESS';
export const fetchStratsSuccess = strats => ({
  type: FETCH_STRATS_SUCCESS,
  strats
});

export const FETCH_STRATS_ERROR = 'FETCH_STRATS_ERROR';
export const fetchStratsError = err => ({
  type: FETCH_STRATS_ERROR,
  err
});

export const fetchStrats = _gameId => dispatch => {
  dispatch(fetchStratsRequest());
  const gameId = `/?gameId=${_gameId}`;
  fetch(`${API_BASE_URL}/strats${gameId}`, { method: 'GET' })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchStratsSuccess(data));
    })
    .catch(err => dispatch(fetchStratsError(err)));
};
