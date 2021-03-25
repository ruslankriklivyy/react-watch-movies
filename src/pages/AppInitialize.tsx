import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
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
} from '../redux/actions/movies';
import { RootState } from '../redux/reducers/index';
import { Preloader } from '../components';

const Home = React.lazy(() => import('../pages/Home'));
const Movies = React.lazy(() => import('../pages/Movies'));
const MovieItem = React.lazy(() => import('../pages/MovieItem'));

function AppInitialize() {
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
    rateValue,
  } = useSelector((state: RootState) => {
    return state.movies;
  });
  const rateNumber = useSelector((state: RootState) => {
    return state.filters.rateNumber;
  });
  const { token, sessionId } = useSelector((state: RootState) => {
    return state.auth;
  });
  const onSetMovieId = (id: number) => {
    if (items && items.results) {
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

  React.useEffect(() => {
    dispatch(getTrailerById(movieId));
  }, [dispatch, movieId]);

  React.useEffect(() => {
    dispatch(getCredits(movieId));
  }, [movieId, dispatch]);

  React.useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  React.useEffect(() => {
    const localStorageIdRef = localStorage.getItem('chosenItemId');
    const localStorageSearchInput = localStorage.getItem('searchInput');

    if (localStorageIdRef && localStorageSearchInput) {
      dispatch(setMovieId(JSON.parse(localStorageIdRef)));
      dispatch(getMoviesBySearch(JSON.parse(localStorageSearchInput)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('chosenItemId', JSON.stringify(movieId));
    localStorage.setItem('searchInput', JSON.stringify(searchValue));
  }, [rateNumber, searchValue, movieId]);

  return (
    <div className="AppInitialize">
      <React.Suspense fallback={<Preloader />}>
        <Route
          exact
          path="/"
          render={() => <Home token={token} setId={onSetMovieId} sessionId={sessionId} />}
        />
      </React.Suspense>
      <React.Suspense fallback={<Preloader />}>
        <Route exact path="/watchmovies" render={() => <Movies />} />
      </React.Suspense>
      <React.Suspense fallback={<Preloader />}>
        <Route
          path={`/watchmovies/${movieId}`}
          render={() => (
            <MovieItem
              sessionId={sessionId}
              onSetValueRate={onSetValueRate}
              movieDetails={movieDetails}
              trailer={trailerById}
              credits={credits}
              genres={genres.genres}
              {...chosenItem[0]}
            />
          )}
        />
      </React.Suspense>
    </div>
  );
}

export default AppInitialize;
