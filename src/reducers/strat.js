import {
  FETCH_ONE_STRAT_REQUEST,
  FETCH_ONE_STRAT_SUCCESS,
  FETCH_ONE_STRAT_ERROR
} from '../actions/strat';

const initalState = {
  strat: {},
  loading: false,
  error: null
};

const oneStratReducer = (state = initalState, action) => {
  if (action.type === FETCH_ONE_STRAT_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === FETCH_ONE_STRAT_SUCCESS) {
    return {
      ...state,
      strat: action.strat,
      loading: false,
      error: null
    };
  }
  if (action.type === FETCH_ONE_STRAT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};

export default oneStratReducer;
