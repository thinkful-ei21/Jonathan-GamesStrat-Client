import {
  FETCH_STRATS_REQUEST,
  FETCH_STRATS_SUCCESS,
  FETCH_STRATS_ERROR
} from '../actions/strat-list';

const initalState = {
  strats: [],
  loading: false,
  error: null
};

const stratsReducer = (state = initalState, action) => {
  if (action.type === FETCH_STRATS_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === FETCH_STRATS_SUCCESS) {
    return {
      ...state,
      strats: action.strats,
      loading: false,
      error: null
    };
  }
  if (action.type === FETCH_STRATS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};

export default stratsReducer;
