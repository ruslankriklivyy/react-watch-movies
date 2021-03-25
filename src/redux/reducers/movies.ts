import { ActionTypes } from '../actions/movies';

type MoviesResult = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type ItemsType = {
  page: number;
  total_pages: number;
  results: Array<MoviesResult>;
  total_results: number;
};

type NowPlayingFilmsDatesType = {
  maximum: string;
  minimum: string;
};

type NowPlayingFilmsType = {
  dates: NowPlayingFilmsDatesType;
  page: number;
  results: Array<MoviesResult>;
  total_pages: number;
  total_results: number;
};

type RateMovieType = {
  status_code: number;
  status_message: string;
};

type BelongsToCollectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type GenresType = {
  genres: Array<GenresItemType>;
};

type GenresItemType = {
  id: number;
  name: string;
};

type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionContries = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type MovieDetails = {
  adult: boolean;
  belongs_to_collection: Array<BelongsToCollectionType>;
  genres: Array<GenresItemType>;
  production_companies: Array<ProductionCompanies>;
  production_contries: Array<ProductionContries>;
  spoken_languages: Array<SpokenLanguages>;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TrailerByIdResultsType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

type TrailerByIdType = {
  id: number;
  results: Array<TrailerByIdResultsType>;
};

type CreditsType = {
  id: number;
  cast: Array<CreditsCastsType>;
  crew: Array<CreditsCrewType>;
};

type CreditsCrewType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: number;
  department: string;
  job: string;
};

type CreditsCastsType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

const initialState = {
  items: {} as ItemsType,
  nowPlayingFilms: {} as NowPlayingFilmsType,
  movieDetails: {} as MovieDetails,
  chosenItem: [] as Array<MoviesResult>,
  searchValue: '' as string,
  isLoading: false as boolean,
  movieId: 0 as number,
  genres: {} as GenresType,
  trailerById: {} as TrailerByIdType,
  credits: {} as CreditsType,
  statusRate: null as RateMovieType | null,
  rateValue: 5 as number,
};

export type initialState = typeof initialState;

const SET_MOVIES = 'SET_MOVIES';
const SET_CHOSEN_ITEM = 'SET_CHOSEN_ITEM';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_MOVIE_ID = 'SET_MOVIE_ID';
const GET_GENRES = 'GET_GENRES';
const SET_CREDITS = 'SET_CREDITS';
const SET_TRAILER = 'SET_TRAILER';
const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
const SET_RATE_MOVIE = 'SET_RATE_MOVIE';
const SET_RATE_VALUE = 'SET_RATE_VALUE';
const SET_NOW_FILMS = 'SET_NOW_FILMS';

const movies = (state = initialState, action: ActionTypes): initialState => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
      };

    case SET_NOW_FILMS:
      return {
        ...state,
        nowPlayingFilms: action.payload,
      };

    case SET_RATE_MOVIE:
      return {
        ...state,
        statusRate: action.payload,
      };

    case SET_RATE_VALUE:
      return {
        ...state,
        rateValue: action.payload,
      };

    case SET_TRAILER:
      return {
        ...state,
        trailerById: action.payload,
      };

    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };

    case SET_CREDITS:
      return {
        ...state,
        credits: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.genres,
      };

    case SET_CHOSEN_ITEM:
      return {
        ...state,
        chosenItem: action.payload,
      };

    case SET_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
      };

    case SEARCH_MOVIES:
      return {
        ...state,
        searchValue: action.payload,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default movies;
