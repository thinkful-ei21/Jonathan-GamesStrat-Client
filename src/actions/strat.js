import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_ONE_STRAT_REQUEST = 'FETCH_ONE_STRAT_REQUEST';
export const fetchOneStratRequest = () => ({
  type: FETCH_ONE_STRAT_REQUEST
});

export const FETCH_ONE_STRAT_SUCCESS = 'FETCH_ONE_STRAT_SUCCESS';
export const fetchOneStratSuccess = strat => ({
  type: FETCH_ONE_STRAT_SUCCESS,
  strat
});

export const FETCH_ONE_STRAT_ERROR = 'FETCH_ONE_STRAT_ERROR';
export const fetchOneStratError = err => ({
  type: FETCH_ONE_STRAT_ERROR,
  err
});

export const fetchOneStrat = _stratId => dispatch => {
  dispatch(fetchOneStratRequest());
  const stratId = `/?search=${_stratId}`;
  return fetch(`${API_BASE_URL}/strats${stratId}`, { method: 'GET' })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchOneStratSuccess(data));
    })
    .catch(err => dispatch(fetchOneStratError(err)));
};
