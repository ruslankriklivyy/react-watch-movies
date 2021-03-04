import React from 'react';
import { Button } from '../components';

const MovieItem = ({ name, imageUrl, rating, year, genre }) => {
  return (
    <div className="movie-watch__item">
      <div className="container">
        <h4 className="movie-watch__item-title">{name}</h4>
        <div className="movie-watch__item-box">
          <div className="movie-watch__item-left">
            <div className="movie-watch__item-img">
              <img src={imageUrl} alt="movie img" />
            </div>
            <div className="movie-watch__item-trailer">
              <Button>Watch Trailer</Button>
            </div>
          </div>
          <div className="movie-watch__item-right">
            <div className="movie-watch__item-info movie-watch__item-info--rating">
              Rating: <span>{rating}</span>
            </div>
            <div className="movie-watch__item-info">Tagline</div>
            <div className="movie-watch__item-info">
              Year: <span>{year}</span>
            </div>
            <div className="movie-watch__item-info">Director</div>
            <div className="movie-watch__item-info">
              Genre: <span>{genre}</span>
            </div>
            <div className="movie-watch__item-info">Cast actors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
