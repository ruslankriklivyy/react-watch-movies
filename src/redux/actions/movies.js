import { filmsAPI } from '../../api/api';
import { SET_PAGE } from './filters';

const SET_MOVIES = 'SET_MOVIES';
const SET_CHOSEN_ITEM = 'SET_CHOSEN_ITEM';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_MOVIE_ID = 'SET_MOVIE_ID';
const GET_GENRES = 'GET_GENRES';
const SET_CREDITS = 'SET_CREDITS';

export const getMovies = (genreId, page, sortType, searchValue, movieId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const data = await filmsAPI.getPopularFilms(sortType, genreId, searchValue, page);
  dispatch(setMovies(data));
  console.log(data);
  dispatch(setIsLoading(true));
  // axios
  //   .get(
  //     `/movies?${genre !== null && genre !== '' ? `genre=${genre}` : ''}&_sort=${
  //       sortType.type
  //     }&_order=${sortType.order}`,
  //   )
  //   .then(({ data }) => {
  //     const filterMovie = data.filter(
  //       (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
  //     );
  //     searchValue.length > 0 ? dispatch(setMovies(filterMovie)) : dispatch(setMovies(data));
  //   })
  //   .finally(() => dispatch(setIsLoading(true)));
};

export const getGenres = (genresFilms) => async (dispatch) => {
  const genres = await filmsAPI.getGenresFilms(genresFilms);

  dispatch(getFilmsByGenres(genres));
};

export const getCredits = (id) => async (dispatch) => {
  const casts = await filmsAPI.getCreditsFilms(id);
  dispatch(setCredits(casts.cast));
};

export const setCredits = (casts) => ({
  type: SET_CREDITS,
  payload: casts,
});

export const getMoviesBySearch = (text) => ({
  type: SEARCH_MOVIES,
  payload: text,
});

export const getFilmsByGenres = (genres) => ({
  type: GET_GENRES,
  genres,
});

export const setChosenItem = (item) => ({
  type: SET_CHOSEN_ITEM,
  payload: item,
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
