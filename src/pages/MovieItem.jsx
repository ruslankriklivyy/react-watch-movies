import React from 'react';
import { Button } from '../components';
import scrollTop from '../utils/scrollTo';

import { getGenres } from '../redux/actions/movies';

import defaultUser from '../assets/images/default-user.webp';
import { useDispatch } from 'react-redux';

const MovieItem = ({
  credits,
  title,
  genre,
  vote_average,
  overview,
  poster_path,
  release_date,
  genre_ids,
}) => {
  const newGenres = [];
  if (genre !== null) {
    for (let i = 0; i < genre_ids.length; i++) {
      const newItem = genre.genres.filter((item) => item.id === genre_ids[i]);
      newGenres.push(newItem[0]);
    }
  }

  React.useEffect(() => {
    scrollTop();
  }, []);

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
              Rating: <span>{vote_average}</span>
            </div>
            <div className="movie-watch__item-info">Tagline</div>
            <div className="movie-watch__item-info">
              Year: <span>{release_date}</span>
            </div>
            <div className="movie-watch__item-info">
              {/* Director: <span>{credits.slice(0, 1)[0].name}</span> */}
            </div>
            <div className="movie-watch__item-info">
              Genre:
              {newGenres.map((item, index) => (
                <span className="movie-watch__item-genre" key={index}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="movie-watch__item-info-actor">
              Cast:
              {credits.slice(0, 5).map((item) => (
                <div className="movie-watch__item-actor">
                  <img
                    src={
                      item.profile_path !== null
                        ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                        : defaultUser
                    }
                    alt="actor img"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
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
