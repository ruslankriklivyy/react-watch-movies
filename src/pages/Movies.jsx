import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Menu, SortBy, MovieBlock } from '../components';
import { getMovies, getMoviesBySearch } from '../redux/actions/movies';
import { filterByGenre, filterBySortType } from '../redux/actions/filters';

const genreNames = ['Action', 'Adventure', 'Comedy', 'Drama', 'Documentary', 'Crime'];
const sortBy = [
  { name: 'Latest', type: 'year', order: 'desc' },
  { name: 'Rating', type: 'rating', order: 'desc' },
  { name: 'A-Z', type: 'name', order: 'asc' },
];

const Movies = ({ onSetMovieId }) => {
  const dispatch = useDispatch();
  const { items, searchValue } = useSelector(({ movies }) => movies);
  const { genre, sortType } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(getMovies(genre, sortType, searchValue));
  }, [genre, sortType, searchValue, dispatch]);

  const onSearchMovie = (text) => {
    dispatch(getMoviesBySearch(text));
  };

  const onSelectFilterGenre = (index) => {
    const genre = index !== null ? genreNames[index].toLowerCase() : '';
    dispatch(filterByGenre(genre));
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
      <Menu onSelectGenre={onSelectFilterGenre} items={genreNames} />
      <SortBy onSelectFilter={onSelectFilterByType} items={sortBy} />
      <div className="movies">
        <div className="container">
          <MovieBlock setId={onSetMovieId} items={items} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
