import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route } from 'react-router-dom';

import { Home, Movies, MovieItem } from './pages';
import { setMovieId } from './redux/actions/movies';

function App() {
  const dispatch = useDispatch();
  const { items, movieId } = useSelector(({ movies }) => movies);
  const movieItem = movieId && items.filter((item) => item.id === movieId);

  const onSetMovieId = React.useCallback(
    (id) => {
      dispatch(setMovieId(id));
    },
    [dispatch],
  );

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/watchmovies" render={() => <Movies onSetMovieId={onSetMovieId} />} />
      <Route
        exact
        path={`/watchmovies/${movieId}-${
          (movieItem !== null) | undefined && movieItem[0].name.split(' ').join('').toLowerCase()
        }`}
        render={() => <MovieItem {...movieItem[0]} />}
      />
    </div>
  );
}

export default App;
