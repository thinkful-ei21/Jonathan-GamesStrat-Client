import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR
} from '../actions';

const initalState = {
  games: [],
  loading: false,
  error: null
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
      loading: false
    };
  }
  if (action.type === FETCH_GAMES_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};

export default gamesReducer;
