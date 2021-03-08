const initialState = {
  items: [],
  movieDetails: null,
  chosenItem: [],
  searchValue: '',
  isLoading: false,
  movieId: null,
  genres: null,
  trailerById: null,
  credits: [],
  statusRate: null,
  rateValue: null,
};

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

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
      };

    case SET_RATE_MOVIE:
      return {
        ...state,
        statusRate: action.payload,
      };

    case SET_RATE_VALUE:
      return {
        ...state,
        rateValue: action.payload,
      };

    case SET_TRAILER:
      return {
        ...state,
        trailerById: action.payload,
      };

    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };

    case SET_CREDITS:
      return {
        ...state,
        credits: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.genres,
      };

    case SET_CHOSEN_ITEM:
      return {
        ...state,
        chosenItem: action.payload,
      };

    case SET_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
      };

    case SEARCH_MOVIES:
      return {
        ...state,
        searchValue: action.payload,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default movies;
