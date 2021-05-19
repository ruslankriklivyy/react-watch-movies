import {
  CreditsType,
  GenresType,
  ItemsType,
  MovieDetails,
  MoviesResult,
  NowPlayingFilmsType,
  RateMovieType,
  TrailerByIdType,
} from '../interfaces/interfaces';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { filmsAPI } from '../api/api';
import { setTotalPages } from './filters';

const initialState = {
  items: {} as ItemsType,
  nowPlayingFilms: {} as NowPlayingFilmsType,
  movieDetails: {} as MovieDetails,
  chosenItem: [] as Array<MoviesResult>,
  searchValue: '' as string,
  isLoading: false as boolean,
  movieId: 0 as number,
  genres: {} as GenresType,
  trailerById: {} as TrailerByIdType,
  credits: {} as CreditsType,
  statusRate: null as RateMovieType | null,
  rateValue: 5 as number,
};

export type InitialState = typeof initialState;

export const getMovies = createAsyncThunk(
  'movies/getMoviesStatus',
  async (props: any, thunkAPI) => {
    const { sortType, genreId, searchValue, page, rateNumber } = props;
    thunkAPI.dispatch(setIsLoading(true));

    const data = await filmsAPI.getPopularFilms(sortType, genreId, searchValue, page, rateNumber);
    thunkAPI.dispatch(setTotalPages(data.total_pages));
    thunkAPI.dispatch(setMovies(data));
    thunkAPI.dispatch(setIsLoading(false));
    return data;
  },
);

export const postRateById = createAsyncThunk(
  'movies/postRateByIdStatus',
  async (props: any, thunkApi) => {
    const { id, value, sessionId } = props;
    const data = await filmsAPI.postRateMovie(id, value, sessionId);
    thunkApi.dispatch(setRateMovie(data));
  },
);

export const getGenres = createAsyncThunk('movies/getGenresStatus', async (_, thunkApi) => {
  const genres = await filmsAPI.getGenresFilms();
  thunkApi.dispatch(getFilmsByGenres(genres));
});

export const getCredits = createAsyncThunk(
  'movies/getCreditsStatus',
  async (id: number, thunkApi) => {
    const casts = await filmsAPI.getCreditsFilms(id);
    thunkApi.dispatch(setCredits(casts));
  },
);

export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetailsStatus',
  async (movieId: number, thunkApi) => {
    const movie = await filmsAPI.getDetails(movieId);
    thunkApi.dispatch(setMovieDetails(movie));
  },
);

export const getTrailerById = createAsyncThunk(
  'movies/getTrailerByIdStatus',
  async (id: number, thunkApi) => {
    const data = await filmsAPI.getTrailer(id);
    thunkApi.dispatch(setTrailerById(data));
  },
);

export const getNowFilms = createAsyncThunk('movies/getNowFilmsStatus', async (_, thunkApi) => {
  const data = await filmsAPI.getNowPlayingFilms();
  thunkApi.dispatch(setNowMovies(data));
});

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNowMovies: (state, action: PayloadAction<NowPlayingFilmsType>) => {
      state.nowPlayingFilms = action.payload;
    },
    setRateMovie: (state, action: PayloadAction<RateMovieType>) => {
      state.statusRate = action.payload;
    },
    setValueRate: (state, action: PayloadAction<number>) => {
      state.rateValue = action.payload;
    },
    setCredits: (state, action: PayloadAction<CreditsType>) => {
      state.credits = action.payload;
    },
    setMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
      state.movieDetails = action.payload;
    },
    setTrailerById: (state, action: PayloadAction<TrailerByIdType>) => {
      state.trailerById = action.payload;
    },
    getMoviesBySearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    getFilmsByGenres: (state, action: PayloadAction<GenresType>) => {
      state.genres = action.payload;
    },
    setChosenItem: (state, action: PayloadAction<MoviesResult[]>) => {
      state.chosenItem = action.payload;
    },
    setMovieId: (state, action: PayloadAction<number>) => {
      state.movieId = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setMovies: (state, action: PayloadAction<ItemsType>) => {
      state.items = action.payload;
    },
  },
});

export default movies.reducer;
export const {
  setMovies,
  setIsLoading,
  setMovieId,
  setChosenItem,
  getFilmsByGenres,
  getMoviesBySearch,
  setTrailerById,
  setMovieDetails,
  setCredits,
  setValueRate,
  setRateMovie,
  setNowMovies,
} = movies.actions;
