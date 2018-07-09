import { createStore, combineReducers, applyMiddleware } from 'redux';
import gamesSearchReducer from './reducers/games';
import oneGameReducer from './reducers/game';
import authReducer from './reducers/auth';
import stratsReducer from './reducers/strats';
import oneStratReducer from './reducers/strat';
import deleteStratReducer from './reducers/delete-strat';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    gamesRed: gamesSearchReducer,
    oneGameRed: oneGameReducer,
    authRed: authReducer,
    stratsRed: stratsReducer,
    oneStratRed: oneStratReducer,
    delStratRed: deleteStratReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
