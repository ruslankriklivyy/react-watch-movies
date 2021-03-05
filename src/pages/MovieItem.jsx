import React from 'react';
import { Button } from '../components';

const MovieItem = ({
  title,
  genre,
  popularity,
  overview,
  poster_path,
  release_date,
  genre_ids,
}) => {
  const newGenres = [];
  for (let i = 0; i < genre_ids.length; i++) {
    const newItem = genre.genres.filter((item) => item.id === genre_ids[i]);
    newGenres.push(newItem[0]);
  }

  return (
    <div className="movie-watch__item">
      <div className="container">
        <h4 className="movie-watch__item-title">{title}</h4>
        <div className="movie-watch__item-box">
          <div className="movie-watch__item-left">
            <div className="movie-watch__item-img">
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movie img" />
            </div>
            <div className="movie-watch__item-trailer">
              <Button>Watch Trailer</Button>
            </div>
          </div>
          <div className="movie-watch__item-right">
            <div className="movie-watch__item-info movie-watch__item-info--rating">
              Rating: <span>{popularity.toFixed(0)}</span>
            </div>
            <div className="movie-watch__item-info">Tagline</div>
            <div className="movie-watch__item-info">
              Year: <span>{release_date}</span>
            </div>
            <div className="movie-watch__item-info">Director</div>
            <div className="movie-watch__item-info">
              Genre:
              {newGenres.map((item, index) => (
                <span className="movie-watch__item-genre" key={index}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="movie-watch__item-info">Cast actors</div>
          </div>
        </div>
        <div className="movie-watch__item-about">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
