const initialState = {
  sortType: {
    type: 'year',
    order: 'desc',
  },
  genre: null,
};

const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';
const FILTER_BY_GENRE = 'FILTER_BY_GENRE';

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
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
