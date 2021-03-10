import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Home, Movies, MovieItem } from './pages';
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
import { getToken, getSessionId, setSessionId } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  const {
    items,
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
  const [cookies, setCookie] = useCookies(['name']);
  const request_token = token && token.request_token;

  setCookie('tokenCookie', token, { path: '/', maxAge: 604800 });

  const onSetMovieId = React.useCallback(
    (id) => {
      const item = items.results.filter((obj) => obj.id === id);
      dispatch(setChosenItem(item));
      dispatch(setMovieId(id));
    },
    [dispatch, items.results],
  );

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
    if (cookies.request_token === request_token) {
      dispatch(getSessionId(token));
    }
    dispatch(getSessionId(cookies.request_token));
  }, [dispatch, token, cookies, request_token]);

  React.useEffect(() => {
    dispatch(getTrailerById(movieId));
  }, [dispatch, movieId]);

  React.useEffect(() => {
    dispatch(getToken(cookies));
  }, [dispatch, cookies]);

  React.useEffect(() => {
    dispatch(getCredits(movieId));
  }, [movieId, dispatch]);

  React.useEffect(() => {
    dispatch(getGenres(chosenItem));
  }, [chosenItem, dispatch]);

  React.useEffect(() => {
    const localStorageRef = localStorage.getItem('chosenItem');
    const localStorageIdRef = localStorage.getItem('chosenItemId');
    const localStorageSearchInput = localStorage.getItem('searchInput');

    if (localStorageRef && localStorageSearchInput) {
      dispatch(setChosenItem(JSON.parse(localStorageRef)));
      dispatch(setMovieId(JSON.parse(localStorageIdRef)));
      dispatch(getMoviesBySearch(JSON.parse(localStorageSearchInput)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('chosenItem', JSON.stringify(chosenItem));
    localStorage.setItem('chosenItemId', JSON.stringify(movieId));
    localStorage.setItem('searchInput', JSON.stringify(searchValue));
  }, [chosenItem, rateNumber, searchValue, movieId]);

  React.useEffect(() => {
    const localStorageToken = localStorage.getItem('request_token');
    const localStorageSessionId = localStorage.getItem('sessionId');
    // dispatch(setSessionId(JSON.parse(localStorageSessionId)));
    // dispatch(getToken(JSON.parse(localStorageToken)));
  }, [dispatch]);

  // React.useEffect(() => {
  //   if (sessionId && sessionId.success === true) {
  //     localStorage.setItem('sessionId', JSON.stringify(sessionId));
  //   }
  // }, [sessionId]);

  React.useEffect(() => {
    localStorage.setItem('request_token', JSON.stringify(token));
  });

  return (
    <div className="App">
      <Route exact path="/" render={() => <Home token={token} />} />
      <Route
        exact
        path="/watchmovies"
        render={() => <Movies movieId={movieId} onSetMovieId={onSetMovieId} />}
      />
      <Route
        path={`/watchmovies/${movieId}`}
        render={() => (
          <MovieItem
            onSetValueRate={onSetValueRate}
            reviews={reviews}
            movieDetails={movieDetails}
            trailer={trailerById}
            credits={credits}
            genre={genres}
            {...chosenItem[0]}
          />
        )}
      />
    </div>
  );
}

export default App;
