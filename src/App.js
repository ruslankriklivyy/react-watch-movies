import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {
  setMovieId,
  setChosenItem,
  getGenres,
  getCredits,
  getMoviesBySearch,
  getTrailerById,
  getMovieDetails,
  postRateById,
  setValueRate,
} from './redux/actions/movies';
import { getSessionId } from './redux/actions/auth';
import { Preloader } from './components';

const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const MovieItem = React.lazy(() => import('./pages/MovieItem'));

function App() {
  const dispatch = useDispatch();
  const {
    items,
    nowPlayingFilms,
    movieDetails,
    credits,
    trailerById,
    searchValue,
    genres,
    chosenItem,
    movieId,
    reviews,
    rateValue,
  } = useSelector(({ movies }) => movies);
  const rateNumber = useSelector(({ filters }) => filters.rateNumber);
  const { token, sessionId } = useSelector(({ auth }) => auth);
  const onSetMovieId = (id) => {
    if (items.length > 0) {
      const item = items.results.filter((obj) => obj.id === id);
      dispatch(setChosenItem(item));
      dispatch(setMovieId(id));
    } else {
      const newPlayingItems = nowPlayingFilms.results.filter((obj) => obj.id === id);
      dispatch(setChosenItem(newPlayingItems));
      dispatch(setMovieId(id));
    }
  };

  React.useEffect(() => {
    const localStorageRef = localStorage.getItem('chosenItem');

    if (localStorageRef) {
      dispatch(setChosenItem(JSON.parse(localStorageRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('chosenItem', JSON.stringify(chosenItem));
  }, [chosenItem]);

  const onSetValueRate = React.useCallback(
    (val) => {
      dispatch(setValueRate(val));
    },
    [dispatch],
  );

  React.useEffect(() => {
    dispatch(postRateById(movieId, rateValue, sessionId));
  }, [dispatch, movieId, rateValue, sessionId]);

  React.useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [dispatch, movieId]);

  // React.useEffect(() => {
  //   dispatch(getSessionId(token));
  // }, [dispatch, token]);

  React.useEffect(() => {
    dispatch(getTrailerById(movieId));
  }, [dispatch, movieId]);

  React.useEffect(() => {
    dispatch(getCredits(movieId));
  }, [movieId, dispatch]);

  React.useEffect(() => {
    dispatch(getGenres(chosenItem));
  }, [chosenItem, dispatch]);

  React.useEffect(() => {
    const localStorageIdRef = localStorage.getItem('chosenItemId');
    const localStorageSearchInput = localStorage.getItem('searchInput');

    if (localStorageSearchInput) {
      dispatch(setMovieId(JSON.parse(localStorageIdRef)));
      dispatch(getMoviesBySearch(JSON.parse(localStorageSearchInput)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('chosenItemId', JSON.stringify(movieId));
    localStorage.setItem('searchInput', JSON.stringify(searchValue));
  }, [rateNumber, searchValue, movieId]);

  return (
    <div className="App">
      <React.Suspense fallback={<Preloader />}>
        <Route
          exact
          path="/"
          render={() => <Home token={token} setId={onSetMovieId} sessionId={sessionId} />}
        />
      </React.Suspense>
      <React.Suspense fallback={<Preloader />}>
        <Route
          exact
          path="/watchmovies"
          render={() => <Movies movieId={movieId} onSetMovieId={onSetMovieId} />}
        />
      </React.Suspense>
      <React.Suspense fallback={<Preloader />}>
        <Route
          path={`/watchmovies/${movieId}`}
          render={() => (
            <MovieItem
              sessionId={sessionId}
              onSetValueRate={onSetValueRate}
              reviews={reviews}
              movieDetails={movieDetails}
              trailer={trailerById}
              credits={credits}
              genres={genres}
              {...chosenItem[0]}
            />
          )}
        />
      </React.Suspense>
    </div>
  );
}

export default App;
