const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';
const SET_PAGE = 'SET_PAGE';

export const filterBySortType = (obj) => ({
  type: FILTER_BY_SORT_TYPE,
  payload: obj,
});

export const setCurrentPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const filterByGenre = (genre) => ({
  type: FILTER_BY_GENRE,
  payload: genre,
});
