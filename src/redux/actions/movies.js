import axios from 'axios';

const SET_MOVIES = 'SET_MOVIES';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_MOVIE_ID = 'SET_MOVIE_ID';

export const getMovies = (genre, sortType, searchValue) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(
      `/movies?${genre !== null && genre !== '' ? `genre=${genre}` : ''}&_sort=${
        sortType.type
      }&_order=${sortType.order}`,
    )
    .then(({ data }) => {
      const filterMovie = data.filter(
        (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
      );
      searchValue.length > 0 ? dispatch(setMovies(filterMovie)) : dispatch(setMovies(data));
    })
    .finally(() => dispatch(setIsLoading(true)));
};

export const getMoviesBySearch = (text) => ({
  type: SEARCH_MOVIES,
  payload: text,
});

export const setMovieId = (id) => ({
  type: SET_MOVIE_ID,
  payload: id,
});

const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

const setMovies = (items) => ({
  type: SET_MOVIES,
  payload: items,
});
