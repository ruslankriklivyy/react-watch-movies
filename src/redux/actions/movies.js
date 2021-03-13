import { filmsAPI } from '../../api/api';
import { setTotalPages } from './filters';

const SET_MOVIES = 'SET_MOVIES';
const SET_CHOSEN_ITEM = 'SET_CHOSEN_ITEM';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_MOVIE_ID = 'SET_MOVIE_ID';
const GET_GENRES = 'GET_GENRES';
const SET_CREDITS = 'SET_CREDITS';
const SET_TRAILER = 'SET_TRAILER';
const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
const SET_RATE_MOVIE = 'SET_RATE_MOVIE';
const SET_RATE_VALUE = 'SET_RATE_VALUE';
const SET_NOW_FILMS = 'SET_NOW_FILMS';

export const getMovies = (genreId, page, sortType, searchValue, rateNumber) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const data = await filmsAPI.getPopularFilms(sortType, genreId, searchValue, page, rateNumber);
  dispatch(setTotalPages(data.total_pages));
  dispatch(setMovies(data));
  dispatch(setIsLoading(false));
};

export const postRateById = (id, value, sessionId) => async (dispatch) => {
  const data = await filmsAPI.postRateMovie(id, value, sessionId);
  dispatch(setRateMovie(data));
};

export const getGenres = (genresFilms) => async (dispatch) => {
  const genres = await filmsAPI.getGenresFilms(genresFilms);

  dispatch(getFilmsByGenres(genres.genres));
};

export const getCredits = (id) => async (dispatch) => {
  const casts = await filmsAPI.getCreditsFilms(id);
  dispatch(setCredits(casts.cast));
};

export const getMovieDetails = (movieId) => async (dispatch) => {
  const movie = await filmsAPI.getDetails(movieId);
  dispatch(setMovieDetails(movie));
};

export const getTrailerById = (id) => async (dispatch) => {
  const data = await filmsAPI.getTrailer(id);
  dispatch(setTrailerById(data));
};

export const getNowFilms = () => async (dispatch) => {
  const data = await filmsAPI.getNowPlayingFilms();
  dispatch(setNowMovies(data));
};

export const setNowMovies = (data) => ({
  type: SET_NOW_FILMS,
  payload: data,
});

export const setRateMovie = (data) => ({
  type: SET_RATE_MOVIE,
  payload: data,
});

export const setValueRate = (value) => ({
  type: SET_RATE_VALUE,
  payload: value,
});

export const setCredits = (casts) => ({
  type: SET_CREDITS,
  payload: casts,
});

export const setMovieDetails = (movie) => ({
  type: SET_MOVIE_DETAILS,
  payload: movie,
});

export const setTrailerById = (trailer) => ({
  type: SET_TRAILER,
  payload: trailer,
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
