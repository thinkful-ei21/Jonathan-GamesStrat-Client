import {
  DELETE_STRATS_REQUEST,
  DELETE_STRATS_SUCCESS,
  DELETE_STRATS_ERROR
} from '../actions/delete-strat';

const initalState = {
  strat: [],
  loading: false,
  error: null
};

const stratsReducer = (state = initalState, action) => {
  if (action.type === DELETE_STRATS_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === DELETE_STRATS_SUCCESS) {
    return {
      ...state,
      strats: action.strats,
      loading: false,
      error: null
    };
  }
  if (action.type === DELETE_STRATS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};

export default stratsReducer;
