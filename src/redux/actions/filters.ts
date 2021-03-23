const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';
const SET_PAGE = 'SET_PAGE';
const FILTER_BY_RATE = 'FILTER_BY_RATE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

type FilterBySortTypeType = {
  type: typeof FILTER_BY_SORT_TYPE;
  payload: object;
};

export const filterBySortType = (obj: object): FilterBySortTypeType => ({
  type: FILTER_BY_SORT_TYPE,
  payload: obj,
});

type SetTotalPagesType = {
  type: typeof SET_TOTAL_PAGES;
  payload: number;
};

export const setTotalPages = (pages: number): SetTotalPagesType => ({
  type: SET_TOTAL_PAGES,
  payload: pages,
});

type FilterByRateType = {
  type: typeof FILTER_BY_RATE;
  payload: number;
};

export const filterByRate = (num: number): FilterByRateType => ({
  type: FILTER_BY_RATE,
  payload: num,
});

type SetCurrentPageType = {
  type: typeof SET_PAGE;
  payload: number;
};

export const setCurrentPage = (page: number): SetCurrentPageType => ({
  type: SET_PAGE,
  payload: page,
});

type FilterByGenreType = {
  type: typeof FILTER_BY_GENRE;
  payload: number;
};

export const filterByGenre = (genre: number): FilterByGenreType => ({
  type: FILTER_BY_GENRE,
  payload: genre,
});
