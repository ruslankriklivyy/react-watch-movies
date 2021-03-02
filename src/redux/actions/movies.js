import axios from 'axios';

const SET_MOVIES = 'SET_MOVIES';

export const getMovies = (genre) => (dispatch) => {
  axios
    .get(`/movies${genre !== null && genre !== '' ? `?genre=${genre}` : ''}`)
    .then(({ data }) => {
      dispatch(setMovies(data));
    });
};

const setMovies = (items) => ({
  type: SET_MOVIES,
  payload: items,
});
