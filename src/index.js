import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import store from './store';
import GameStrat from './components/gameStrat';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GameStrat />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
