import { ActionTypes } from '../actions/filters';
import { SortByTypeType } from '../../types/types';

const initialState = {
  sortType: {
    name: 'Latest' as string,
    type: 'primary_release_date' as string,
    order: 'desc' as string,
  } as SortByTypeType,
  genreId: 28 as number,
  currentPage: 1 as number,
  totalPages: 0 as number,
  rateNumber: 5 as number,
};

export type initialState = typeof initialState;

const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';
const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const SET_PAGE = 'SET_PAGE';
const FILTER_BY_RATE = 'FILTER_BY_RATE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

const filters = (state = initialState, action: ActionTypes): initialState => {
  switch (action.type) {
    case FILTER_BY_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    case FILTER_BY_RATE:
      return {
        ...state,
        rateNumber: action.payload,
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
