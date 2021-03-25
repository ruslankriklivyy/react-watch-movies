import React from 'react';
import { Link } from 'react-router-dom';
import MovieBlockLoader from './MovieBlockLoader';
import starSvg from '../assets/images/star.svg';
import voteCount from '../assets/images/review.svg';
import defaultMovie from '../assets/images/default-movie.jpg';
import { MoviesResult } from '../types/types';

type MovieBlockType = {
  items: Array<MoviesResult>;
  setId: (id: number) => void;
  isLoading: boolean;
};

const MovieBlock: React.FC<MovieBlockType> = ({ items, setId, isLoading }) => {
  return (
    <div className="movies-block">
      {isLoading
        ? Array(20)
            .fill(0)
            .map((_, index) => <MovieBlockLoader key={index} />)
        : items &&
          items.map(({ title, id, vote_average, poster_path, release_date, vote_count }) => (
            <Link
              to={`/watchmovies/${id}`}
              onClick={() => setId(id)}
              key={id}
              className="movies-block__item">
              <div className="movies-block__item-img">
                <img
                  src={
                    poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultMovie
                  }
                  alt="movies img"
                />
              </div>
              <div className="movies-block__item-info">
                <div className="movies-block__item-info-top">
                  <h4>{title}</h4>
                </div>
                <div className="movies-block__item-info-bottom">
                  <span className="movies-block__item-info-bottom-date">{release_date}</span>
                  <div className="movies-block__item-info-rating">
                    <span className="movies-block__item-info-vote">
                      <img src={voteCount} alt="vote count svg" />
                      {vote_count}
                    </span>
                    <img
                      className="movies-block__item-info-rating-img"
                      src={starSvg}
                      alt="star svg"
                    />
                    <b>{vote_average}</b>
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default MovieBlock;
