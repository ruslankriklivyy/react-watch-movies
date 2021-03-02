const initialState = {
  year: null,
  genre: null,
};

const FILTER_BY_YEAR = 'FILTER_BY_YEAR';
const FILTER_BY_GENRE = 'FILTER_BY_GENRE';

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_YEAR:
      return {
        ...state,
        year: action.payload,
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
