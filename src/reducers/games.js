import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  SAVE_INPUT_VALUE,
  CLEAR_INPUT_VALUE
} from '../actions/game-search';

const initalState = {
  games: [],
  loading: false,
  error: null,
  value: ''
};

const gamesReducer = (state = initalState, action) => {
  if (action.type === FETCH_GAMES_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === FETCH_GAMES_SUCCESS) {
    return {
      ...state,
      games: action.games,
      loading: false,
      error: null
    };
  }
  if (action.type === FETCH_GAMES_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  if (action.type === SAVE_INPUT_VALUE) {
    return {
      ...state,
      value: action.value
    };
  }
  if (action.type === CLEAR_INPUT_VALUE) {
    return {
      ...state,
      value: action.value
    };
  }
  return state;
};

export default gamesReducer;
