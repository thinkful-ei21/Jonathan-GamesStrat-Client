import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const DELETE_STRATS_REQUEST = 'DELETE_STRATS_REQUEST';
export const deleteStratsRequest = () => ({
  type: DELETE_STRATS_REQUEST
});

export const DELETE_STRATS_SUCCESS = 'DELETE_STRATS_SUCCESS';
export const deleteStratsSuccess = strat => ({
  type: DELETE_STRATS_SUCCESS,
  strat
});

export const DELETE_STRATS_ERROR = 'DELETE_STRATS_ERROR';
export const deleteStratsError = err => ({
  type: DELETE_STRATS_ERROR,
  err
});

export const deleteStrat = stratId => (dispatch, getState) => {
  const authToken = getState().authRed.authToken;
  dispatch(deleteStratsRequest());
  return fetch(`${API_BASE_URL}/strats/${stratId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .catch(err => dispatch(deleteStratsError(err)));
};
