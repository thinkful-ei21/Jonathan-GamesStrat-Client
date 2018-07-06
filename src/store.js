import { createStore, combineReducers, applyMiddleware } from 'redux';
import gamesSearchReducer from './reducers/game-search';
import authReducer from './reducers/auth';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    form: formReducer,
    games: gamesSearchReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);
