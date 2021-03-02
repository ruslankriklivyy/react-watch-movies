import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Menu, SortBy, MovieBlock } from '../components';
import { getMovies } from '../redux/actions/movies';
import { filterByGenre } from '../redux/actions/filters';

const genreNames = ['Action', 'Adventure', 'Comedy', 'Drama', 'Documentary', 'Crime'];
const sortBy = ['Latest', 'Year', 'A-Z'];

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.items);
  // const year = useSelector(({ filters }) => filters.year);
  const genre = useSelector(({ filters }) => filters.genre);

  React.useEffect(() => {
    dispatch(getMovies(genre));
  }, [genre]);

  const onSelectFilterGenre = (index) => {
    const genre = index !== null ? genreNames[index].toLowerCase() : '';
    dispatch(filterByGenre(genre));
  };

  return (
    <div className="Movies">
      <Header />
      <Menu onSelectGenre={onSelectFilterGenre} items={genreNames} />
      <SortBy items={sortBy} />
      <div className="movies">
        <div className="container">
          <MovieBlock items={movies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
