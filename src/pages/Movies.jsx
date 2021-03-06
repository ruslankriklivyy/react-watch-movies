import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Menu, SortBy, MovieBlock, Paginator } from '../components';
import { getMovies, getMoviesBySearch, getGenres } from '../redux/actions/movies';
import { filterByGenre, filterBySortType, setCurrentPage } from '../redux/actions/filters';
const sortBy = [
  { name: 'Latest', type: 'primary_release_date', order: 'desc' },
  { name: 'Popular', type: 'popularity', order: 'desc' },
  { name: 'Rating', type: 'vote_average', order: 'desc' },
  { name: 'A-Z', type: 'title', order: 'asc' },
];

const Movies = ({ onSetMovieId, movieId }) => {
  const dispatch = useDispatch();
  const { items, genres, searchValue } = useSelector(({ movies }) => movies);
  const { sortType, genreId, currentPage } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(getMovies(genreId, currentPage, sortType, searchValue, movieId));
  }, [sortType, searchValue, movieId, currentPage, genreId, dispatch]);

  React.useEffect(() => {
    dispatch(getGenres(sortType));
  }, [dispatch, sortType]);

  const onSearchMovie = (text) => {
    dispatch(getMoviesBySearch(text));
  };

  const onSelectFilterGenre = (id) => {
    // const genreName = index !== null ? genres.genres.name.toLowerCase() : '';
    dispatch(filterByGenre(id));
  };

  const onSelectPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const onSelectFilterByType = React.useCallback(
    (index) => {
      const sortType = index !== null ? sortBy[index] : '';
      dispatch(filterBySortType(sortType));
    },
    [dispatch],
  );

  return (
    <div className="Movies">
      <Header onSearch={onSearchMovie} />
      <Menu onSelectGenre={onSelectFilterGenre} items={genres && genres.genres} />
      <SortBy onSelectFilter={onSelectFilterByType} items={sortBy} />
      <div className="movies">
        <div className="container">
          <MovieBlock setId={onSetMovieId} items={items.results} />
        </div>
      </div>
      <Paginator onSelectPage={onSelectPage} />
    </div>
  );
};

export default Movies;
