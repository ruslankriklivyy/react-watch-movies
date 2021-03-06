import React from 'react';
import { Link } from 'react-router-dom';

import starSvg from '../assets/images/star.svg';

const MovieBlock = ({ items, setId }) => {
  return (
    <div className="movies-block">
      {items &&
        items.map(({ title, id, vote_average, poster_path, release_date }) => (
          <Link
            to={`/watchmovies/${id}`}
            onClick={() => setId(id)}
            key={id}
            className="movies-block__item">
            <div className="movies-block__item-img">
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movies img" />
            </div>
            <div className="movies-block__item-info">
              <div className="movies-block__item-info-top">
                <h4>{title}</h4>
              </div>
              <div className="movies-block__item-info-bottom">
                <span>{release_date}</span>
                <div className="movies-block__item-info-rating">
                  <img src={starSvg} alt="star svg" />
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
