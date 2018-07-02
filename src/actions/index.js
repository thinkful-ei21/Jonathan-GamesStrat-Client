export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const fetchGamesRequest = () => ({
  type: FETCH_GAMES_REQUEST
});

export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const fetchGamesSuccess = games => ({
  type: FETCH_GAMES_SUCCESS,
  games
});

export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';
export const fetchGamesError = err => ({
  type: FETCH_GAMES_ERROR,
  err
});

export const fetchGames = () => dispatch => {
  dispatch(fetchGamesRequest());
  fetch('http://localhost:8080/api/GameStrat', { method: 'GET' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(fetchGamesSuccess(data.games)))
    .catch(err => dispatch(fetchGamesError(err)));
};
