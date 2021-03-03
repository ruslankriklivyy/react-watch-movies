const initialState = {
  items: [],
  searchValue: '',
  isLoading: false,
};

const SET_MOVIES = 'SET_MOVIES';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SET_IS_LOADING = 'SET_IS_LOADING';

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
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
