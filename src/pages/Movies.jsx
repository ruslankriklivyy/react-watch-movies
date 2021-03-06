import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Menu, SortBy, MovieBlock } from '../components';
import { getMovies, getMoviesBySearch, getGenres } from '../redux/actions/movies';
import { filterByGenre, filterBySortType } from '../redux/actions/filters';

// const genreNames = ['Action', 'Adventure', 'Comedy', 'Drama', 'Documentary', 'Crime'];
// const genreNames = [
//   {
//     name: 'Action',
//     genreId: 28
//   },
//   {
//     name: 'Adventure',
//     genreId: 12
//   },
//   {
//     name: 'Comedy',
//     genreId: 35
//   }
// ]
const sortBy = [
  { name: 'Latest', type: 'primary_release_date', order: 'desc' },
  { name: 'Popular', type: 'popularity', order: 'desc' },
  { name: 'Rating', type: 'vote_average', order: 'desc' },
  { name: 'A-Z', type: 'title', order: 'asc' },
];

const Movies = ({ onSetMovieId, movieId }) => {
  const dispatch = useDispatch();
  const { items, genres, searchValue, chosenItem } = useSelector(({ movies }) => movies);
  const { sortType, genreId } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(getMovies(genreId, chosenItem, sortType, searchValue, movieId));
  }, [sortType, searchValue, movieId, chosenItem, genreId, dispatch]);

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
    </div>
  );
};

export default Movies;
