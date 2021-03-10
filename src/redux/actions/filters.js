const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';
const SET_PAGE = 'SET_PAGE';
const FILTER_BY_RATE = 'FILTER_BY_RATE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

export const filterBySortType = (obj) => ({
  type: FILTER_BY_SORT_TYPE,
  payload: obj,
});

export const setTotalPages = (pages) => ({
  type: SET_TOTAL_PAGES,
  paylaod: pages,
});

export const filterByRate = (num) => ({
  type: FILTER_BY_RATE,
  payload: num,
});

export const setCurrentPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const filterByGenre = (genre) => ({
  type: FILTER_BY_GENRE,
  payload: genre,
});
