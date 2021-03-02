const FILTER_BY_YEAR = 'FILTER_BY_YEAR';
const FILTER_BY_GENRE = 'FILTER_BY_GENRE';

export const filterByYear = (year) => ({
  type: FILTER_BY_YEAR,
  payload: year,
});

export const filterByGenre = (genre) => ({
  type: FILTER_BY_GENRE,
  payload: genre,
});
