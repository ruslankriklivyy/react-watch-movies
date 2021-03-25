import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import scrollTo from '../utils/scrollTo';
import { SortByTypeType } from '../types/types';
import { Header, Menu, SortBy, MovieBlock, Paginator } from '../components';
import { RootState } from '../redux/reducers/index';
import {
  getMovies,
  getMoviesBySearch,
  getGenres,
  setChosenItem,
  setMovieId,
} from '../redux/actions/movies';
import {
  filterByGenre,
  filterBySortType,
  setCurrentPage,
  filterByRate,
} from '../redux/actions/filters';
const sortBy = [
  { name: 'Latest', type: 'primary_release_date', order: 'desc' },
  { name: 'Popular', type: 'popularity', order: 'desc' },
  { name: 'Rating', type: 'vote_average', order: 'desc' },
  { name: 'A-Z', type: 'title', order: 'asc' },
];

const Movies = () => {
  const dispatch = useDispatch();
  const { items, genres, searchValue, isLoading } = useSelector((state: RootState) => {
    return state.movies;
  });
  const { sortType, genreId, currentPage, rateNumber } = useSelector((state: RootState) => {
    return state.filters;
  });

  const onSetMovieId = (id: number) => {
    const item = items.results.filter((obj) => obj.id === id);
    dispatch(setChosenItem(item));
    dispatch(setMovieId(id));
  };

  const onSelectRate = React.useCallback(
    (num) => {
      dispatch(filterByRate(num));
    },
    [dispatch],
  );

  React.useEffect(() => {
    dispatch(getMovies(genreId, currentPage, sortType, searchValue, rateNumber));
  }, [sortType, searchValue, currentPage, genreId, rateNumber, dispatch]);

  React.useEffect(() => {
    dispatch(getGenres());
  }, [dispatch, sortType]);

  const onSearchMovie = React.useCallback(
    (text) => {
      dispatch(getMoviesBySearch(text));
    },
    [dispatch],
  );

  const onSelectFilterGenre = React.useCallback(
    (id) => {
      dispatch(filterByGenre(id));
    },
    [dispatch],
  );

  const onSelectPage = (page: number) => {
    dispatch(setCurrentPage(page));
    scrollTo();
  };

  const onSelectFilterByType: (index: number) => void = React.useCallback(
    (index: number) => {
      if (index !== null) {
        dispatch(filterBySortType(sortBy[index]));
      }
    },
    [dispatch],
  );

  return (
    <div className="Movies">
      <Header onSearch={onSearchMovie} />
      <Menu onSelectGenre={onSelectFilterGenre} items={genres && genres.genres} />
      <SortBy onSelectRate={onSelectRate} onSelectFilter={onSelectFilterByType} items={sortBy} />
      <div className="movies">
        <div className="container">
          <MovieBlock isLoading={isLoading} setId={onSetMovieId} items={items.results} />
        </div>
      </div>
      <Paginator onSelectPage={onSelectPage} />
    </div>
  );
};

export default Movies;
