import { filmsAPI } from '../../api/api';
import { setTotalPages } from './filters';
import { Dispatch } from 'redux';
import {
  SessionId,
  SortBy,
  NowPlayingFilmsType,
  TrailerByIdType,
  RateMovieType,
  CreditsType,
  MovieDetails,
  GenresType,
  MoviesResult,
  ItemsType,
  SortByTypeType,
} from '../../types/types';

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

export const getMovies = (
  genreId: number,
  page: number,
  sortType: SortByTypeType,
  searchValue: string,
  rateNumber: number,
) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(setIsLoading(true));
  const data = await filmsAPI.getPopularFilms(sortType, genreId, searchValue, page, rateNumber);
  dispatch(setTotalPages(data.total_pages));
  dispatch(setMovies(data));
  dispatch(setIsLoading(false));
};

export const postRateById = (id: number, value: number, sessionId: SessionId) => async (
  dispatch: Dispatch,
) => {
  const data = await filmsAPI.postRateMovie(id, value, sessionId);
  dispatch(setRateMovie(data));
};

export const getGenres = () => async (dispatch: Dispatch): Promise<void> => {
  const genres = await filmsAPI.getGenresFilms();
  dispatch(getFilmsByGenres(genres));
};

export const getCredits = (id: number) => async (dispatch: Dispatch) => {
  const casts = await filmsAPI.getCreditsFilms(id);
  dispatch(setCredits(casts));
};

export const getMovieDetails = (movieId: number) => async (dispatch: Dispatch) => {
  const movie = await filmsAPI.getDetails(movieId);
  dispatch(setMovieDetails(movie));
};

export const getTrailerById = (id: number) => async (dispatch: Dispatch) => {
  const data = await filmsAPI.getTrailer(id);
  dispatch(setTrailerById(data));
};

export const getNowFilms = () => async (dispatch: Dispatch) => {
  const data = await filmsAPI.getNowPlayingFilms();
  dispatch(setNowMovies(data));
};

type setNowFilmsType = {
  type: typeof SET_NOW_FILMS;
  payload: NowPlayingFilmsType;
};

export const setNowMovies = (data: NowPlayingFilmsType): setNowFilmsType => ({
  type: SET_NOW_FILMS,
  payload: data,
});

type setRateMovieType = {
  type: typeof SET_RATE_MOVIE;
  payload: RateMovieType;
};

export const setRateMovie = (data: RateMovieType): setRateMovieType => ({
  type: SET_RATE_MOVIE,
  payload: data,
});

type setValueRateType = {
  type: typeof SET_RATE_VALUE;
  payload: number;
};

export const setValueRate = (value: number): setValueRateType => ({
  type: SET_RATE_VALUE,
  payload: value,
});

type setCreditsType = {
  type: typeof SET_CREDITS;
  payload: CreditsType;
};

export const setCredits = (casts: CreditsType): setCreditsType => ({
  type: SET_CREDITS,
  payload: casts,
});

type setMovieDetailsType = {
  type: typeof SET_MOVIE_DETAILS;
  payload: MovieDetails;
};

export const setMovieDetails = (movie: MovieDetails): setMovieDetailsType => ({
  type: SET_MOVIE_DETAILS,
  payload: movie,
});

type setTrailerByIdType = {
  type: typeof SET_TRAILER;
  payload: TrailerByIdType;
};

export const setTrailerById = (trailer: TrailerByIdType): setTrailerByIdType => ({
  type: SET_TRAILER,
  payload: trailer,
});

type getMoviesBySearchType = {
  type: typeof SEARCH_MOVIES;
  payload: string;
};

export const getMoviesBySearch = (text: string): getMoviesBySearchType => ({
  type: SEARCH_MOVIES,
  payload: text,
});

type getFilmsByGenresType = {
  type: typeof GET_GENRES;
  genres: GenresType;
};

export const getFilmsByGenres = (genres: GenresType): getFilmsByGenresType => ({
  type: GET_GENRES,
  genres,
});

type setChosenItemType = {
  type: typeof SET_CHOSEN_ITEM;
  payload: Array<MoviesResult>;
};

export const setChosenItem = (item: Array<MoviesResult>): setChosenItemType => ({
  type: SET_CHOSEN_ITEM,
  payload: item,
});

type setMovieIdType = {
  type: typeof SET_MOVIE_ID;
  payload: number;
};

export const setMovieId = (id: number): setMovieIdType => ({
  type: SET_MOVIE_ID,
  payload: id,
});

type setIsLoadingType = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

const setIsLoading = (isLoading: boolean): setIsLoadingType => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

type setMoviesType = {
  type: typeof SET_MOVIES;
  payload: ItemsType;
};

const setMovies = (items: ItemsType): setMoviesType => ({
  type: SET_MOVIES,
  payload: items,
});

export type ActionTypes =
  | setMoviesType
  | setIsLoadingType
  | setMovieIdType
  | setChosenItemType
  | getFilmsByGenresType
  | getMoviesBySearchType
  | setTrailerByIdType
  | setMovieDetailsType
  | setCreditsType
  | setValueRateType
  | setRateMovieType
  | setNowFilmsType;
