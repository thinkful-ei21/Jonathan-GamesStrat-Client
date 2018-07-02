import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import GameStrat from './components/gameStrat';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <GameStrat />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
