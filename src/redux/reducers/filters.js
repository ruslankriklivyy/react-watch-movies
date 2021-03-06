const initialState = {
  sortType: {
    type: 'primary_release_date',
    order: 'desc',
  },
  genreId: 28,
  currentPage: 1,
};

const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';
const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const SET_PAGE = 'SET_PAGE';

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        genreId: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
