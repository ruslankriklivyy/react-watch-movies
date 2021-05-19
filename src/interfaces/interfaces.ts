export interface MoviesResult {
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
}

export interface SortBy {
  type: string;
  order: string;
}

export interface SessionId {
  session_id?: string;
  success: string;
}

interface NowPlayingFilmsDatesType {
  maximum: string;
  minimum: string;
}

export interface NowPlayingFilmsType {
  dates: NowPlayingFilmsDatesType;
  page: number;
  results: Array<MoviesResult>;
  total_pages: number;
  total_results: number;
}

interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionContries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface BelongsToCollectionType {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface TrailerByIdResultsType {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface TrailerByIdType {
  id: number;
  results: Array<TrailerByIdResultsType>;
}

export interface RateMovieType {
  status_code: number;
  status_message: string;
}

export interface CreditsType {
  id: number;
  cast: Array<CreditsCastsType>;
  crew: Array<CreditsCrewType>;
}

interface CreditsCrewType {
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
}

export interface CreditsCastsType {
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
}

export interface Token {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface MovieDetails {
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
}

export interface SortByTypeType {
  name: 'Latest' | string;
  type: 'primary_release_date' | string;
  order: 'desc' | string;
}

export interface ItemsType {
  page: number;
  total_pages: number;
  results: Array<MoviesResult>;
  total_results: number;
}

export interface GenresType {
  genres: Array<GenresItemType>;
}

export interface GenresItemType {
  id: number;
  name: string;
}
