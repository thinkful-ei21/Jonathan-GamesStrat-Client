import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const SAVE_STRAT_REQUEST = 'SAVE_STRAT_REQUEST';
export const saveStratRequest = () => ({
  type: SAVE_STRAT_REQUEST
});

export const SAVE_STRAT_SUCCESS = 'SAVE_STRAT_SUCCESS';
export const saveStratSuccess = strat => ({
  type: SAVE_STRAT_SUCCESS,
  strat
});

export const SAVE_STRAT_ERROR = 'SAVE_STRAT_ERROR';
export const saveStratError = err => ({
  type: SAVE_STRAT_ERROR,
  err
});

export const saveStrat = newStrat => (dispatch, getState) => {
  const authToken = getState().authRed.authToken;
  dispatch(saveStratRequest());
  return fetch(`${API_BASE_URL}/strats`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(newStrat)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(saveStratSuccess(data));
    })
    .catch(err => dispatch(saveStratError(err)));
};
