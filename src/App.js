import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route } from 'react-router-dom';

import { Home, Movies, MovieItem } from './pages';
import { setMovieId, setChosenItem, getGenres, getCredits } from './redux/actions/movies';

function App() {
  const dispatch = useDispatch();
  const { items, credits, genres, chosenItem, movieId } = useSelector(({ movies }) => movies);

  const onSetMovieId = (id) => {
    const item = items.results.filter((obj) => obj.id === id);
    dispatch(setChosenItem(item));
    dispatch(setMovieId(id));
  };

  React.useEffect(() => {
    dispatch(getCredits(movieId));
  }, [movieId, dispatch]);

  React.useEffect(() => {
    dispatch(getGenres(chosenItem));
  }, [chosenItem, dispatch]);

  React.useEffect(() => {
    const localStorageRef = localStorage.getItem('chosenItem');
    const localStorageIdRef = localStorage.getItem('chosenItemId');
    if (localStorageRef) {
      dispatch(setChosenItem(JSON.parse(localStorageRef)));
      dispatch(setMovieId(JSON.parse(localStorageIdRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('chosenItem', JSON.stringify(chosenItem));
    localStorage.setItem('chosenItemId', JSON.stringify(movieId));
  }, [chosenItem, movieId]);

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/watchmovies"
        render={() => <Movies movieId={movieId} onSetMovieId={onSetMovieId} />}
      />
      <Route
        path={`/watchmovies/${movieId}`}
        render={() => <MovieItem credits={credits} genre={genres} {...chosenItem[0]} />}
      />
    </div>
  );
}

export default App;
