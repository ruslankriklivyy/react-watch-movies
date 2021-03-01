import axios from 'axios';

const SET_MOVIES = 'SET_MOVIES';

export const getMovies = () => (dispatch) => {
  axios.get('/movies').then(({ data }) => {
    dispatch(setMovies(data));
  });
};

const setMovies = (items) => ({
  type: SET_MOVIES,
  payload: items,
});
