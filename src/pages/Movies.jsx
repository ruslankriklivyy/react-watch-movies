import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Menu, SortBy, MovieBlock } from '../components';
import { getMovies } from '../redux/actions/movies';

const genreNames = ['Action', 'Horror', 'Adventure', 'Comedy', 'Drama', 'Documentary', 'Crime'];
const sortBy = ['Latest', 'Year', 'A-Z'];

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.items);

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="Movies">
      <Header />
      <Menu items={genreNames} />
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
