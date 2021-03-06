const initialState = {
  items: [],
  chosenItem: [],
  searchValue: '',
  isLoading: false,
  movieId: null,
  genres: null,
  credits: [],
};

const SET_MOVIES = 'SET_MOVIES';
const SET_CHOSEN_ITEM = 'SET_CHOSEN_ITEM';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_MOVIE_ID = 'SET_MOVIE_ID';
const GET_GENRES = 'GET_GENRES';
const SET_CREDITS = 'SET_CREDITS';

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
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
