export type MoviesResult = {
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

export type SortBy = {
  type: string;
  order: string;
};

export type SessionId = {
  session_id?: string;
  success: string;
};

type NowPlayingFilmsDatesType = {
  maximum: string;
  minimum: string;
};

export type NowPlayingFilmsType = {
  dates: NowPlayingFilmsDatesType;
  page: number;
  results: Array<MoviesResult>;
  total_pages: number;
  total_results: number;
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

type BelongsToCollectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type TrailerByIdResultsType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

export type TrailerByIdType = {
  id: number;
  results: Array<TrailerByIdResultsType>;
};

export type RateMovieType = {
  status_code: number;
  status_message: string;
};

export type CreditsType = {
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

export type CreditsCastsType = {
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

export type Token = {
  success: boolean;
  expires_at: string;
  request_token: string;
};

export type MovieDetails = {
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

export type SortByTypeType = {
  name: 'Latest' | string;
  type: 'primary_release_date' | string;
  order: 'desc' | string;
};

export type ItemsType = {
  page: number;
  total_pages: number;
  results: Array<MoviesResult>;
  total_results: number;
};

export type GenresType = {
  genres: Array<GenresItemType>;
};

export type GenresItemType = {
  id: number;
  name: string;
};
