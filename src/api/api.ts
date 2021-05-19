import axios from 'axios';
import {
  SessionId,
  NowPlayingFilmsType,
  ItemsType,
  MovieDetails,
  Token,
  GenresType,
  CreditsType,
  TrailerByIdType,
  RateMovieType,
  SortByTypeType,
} from '../interfaces/interfaces';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const apiKey = '?api_key=74d41124b9d3bafd09d832463dd78216';

export const filmsAPI = {
  getNowPlayingFilms(): Promise<NowPlayingFilmsType> {
    return instance.get(`movie/now_playing${apiKey}`).then(({ data }) => {
      return data;
    });
  },
  postRateMovie(id: number, value: number, sessionId: SessionId): Promise<RateMovieType> {
    return instance
      .post(`movie/${id}/rating${apiKey}&session_id=${sessionId && sessionId.session_id}`, {
        value: value,
      })
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
        `${searchValue !== '' ? 'search' : 'discover'}/movie${apiKey}&sort_by=${sortType.type}.${
          sortType.order
        }&vote_count.gte=25&vote_average.gte=${rateNumber}&with_genres=${genreId}&query=${searchValue}&page=${page}&certification_country=US&language=en-US`,
      )

      .then(({ data }) => {
        return data;
      });
  },
  getDetails(movieId: number): Promise<MovieDetails> {
    return instance.get(`movie/${movieId}${apiKey}`).then(({ data }) => {
      return data;
    });
  },
  getGenresFilms(): Promise<GenresType> {
    return instance.get(`genre/movie/list${apiKey}`).then(({ data }) => {
      return data;
    });
  },
  getCreditsFilms(id: number): Promise<CreditsType> {
    return instance.get(`movie/${id}/credits${apiKey}`).then(({ data }) => {
      return data;
    });
  },
  getTrailer(id: number): Promise<TrailerByIdType> {
    return instance.get(`movie/${id}/videos${apiKey}`).then(({ data }) => {
      return data;
    });
  },
};

export const authAPI = {
  getUserToken() {
    return instance.get(`authentication/token/new${apiKey}`).then(({ data }) => {
      return data;
    });
  },
  getSessionId(token: Token): Promise<SessionId> {
    return instance
      .post(`authentication/session/new${apiKey}`, {
        request_token: token && token.request_token,
      })
      .then(({ data }) => {
        return data;
      });
  },
};
