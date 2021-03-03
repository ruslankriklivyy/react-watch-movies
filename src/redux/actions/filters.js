const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const FILTER_BY_SORT_TYPE = 'FILTER_BY_SORT_TYPE';

export const filterBySortType = (obj) => ({
  type: FILTER_BY_SORT_TYPE,
  payload: obj,
});

export const filterByGenre = (genre) => ({
  type: FILTER_BY_GENRE,
  payload: genre,
});
