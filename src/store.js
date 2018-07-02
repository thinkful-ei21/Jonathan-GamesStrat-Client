import { createStore, applyMiddleware } from 'redux';
import gamesReducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(gamesReducer, applyMiddleware(thunk));
