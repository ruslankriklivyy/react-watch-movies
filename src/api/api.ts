import axios from 'axios';
import {
  SessionId,
  SortBy,
  NowPlayingFilmsType,
  ItemsType,
  MovieDetails,
  Token,
  GenresType,
  CreditsType,
  TrailerByIdType,
  RateMovieType,
  SortByTypeType,
} from '../types/types';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const filmsAPI = {
  getNowPlayingFilms(): Promise<NowPlayingFilmsType> {
    return instance
      .get(`movie/now_playing?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
  postRateMovie(id: number, value: number, sessionId: SessionId): Promise<RateMovieType> {
    return instance
      .post(
        `movie/${id}/rating?api_key=74d41124b9d3bafd09d832463dd78216&session_id=${
          sessionId && sessionId.session_id
        }`,
        {
          value: value,
        },
      )
      .then(({ data }) => {
        return data;
      });
  },
  getPopularFilms(
    sortType: SortByTypeType,
    genreId: number,
    searchValue: string,
    page: number,
    rateNumber: number,
  ): Promise<ItemsType> {
    return instance
      .get(
        `${
          searchValue !== '' ? 'search' : 'discover'
        }/movie?api_key=74d41124b9d3bafd09d832463dd78216&sort_by=${sortType.type}.${
          sortType.order
        }&vote_count.gte=25&vote_average.gte=${rateNumber}&with_genres=${genreId}&query=${searchValue}&page=${page}&certification_country=US&language=en-US`,
      )

      .then(({ data }) => {
        return data;
      });
  },
  getDetails(movieId: number): Promise<MovieDetails> {
    return instance
      .get(`movie/${movieId}?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
  getGenresFilms(): Promise<GenresType> {
    return instance
      .get(`genre/movie/list?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
  getCreditsFilms(id: number): Promise<CreditsType> {
    return instance
      .get(`movie/${id}/credits?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
  getTrailer(id: number): Promise<TrailerByIdType> {
    return instance
      .get(`movie/${id}/videos?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
};

export const authAPI = {
  getUserToken() {
    return instance
      .get(`authentication/token/new?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        localStorage.setItem('token', JSON.stringify(data));
        return data;
      });
  },
  getSessionId(token: Token): Promise<any> {
    return instance
      .post(`authentication/session/new?api_key=74d41124b9d3bafd09d832463dd78216`, {
        request_token: token && token.request_token,
      })
      .then(({ data }) => {
        return data;
      });
  },
  createSessionLogin(username: string, password: string, token: string): Promise<any> {
    return instance
      .post(`authentication/token/validate_with_login?api_key=74d41124b9d3bafd09d832463dd78216`, {
        username,
        password,
        request_token: token,
      })
      .then(({ data }) => {
        return data;
      });
  },
};
