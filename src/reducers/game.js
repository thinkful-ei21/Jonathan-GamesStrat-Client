import {
  FETCH_ONE_GAME_REQUEST,
  FETCH_ONE_GAME_SUCCESS,
  FETCH_ONE_GAME_ERROR
} from '../actions/game';

const initalState = {
  game: [],
  loading: false,
  error: null
};

const oneGameReducer = (state = initalState, action) => {
  if (action.type === FETCH_ONE_GAME_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === FETCH_ONE_GAME_SUCCESS) {
    return {
      ...state,
      game: action.game,
      loading: false,
      error: null
    };
  }
  if (action.type === FETCH_ONE_GAME_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};

export default oneGameReducer;
