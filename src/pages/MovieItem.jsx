import React from 'react';
import classNames from 'classnames';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

import { Button } from '../components';
import scrollTop from '../utils/scrollTo';

import defaultUser from '../assets/images/default-user.webp';
import closeSvg from '../assets/images/closeVideo.svg';
import halfStarSvg from '../assets/images/star-half.svg';
import emptyStarSvg from '../assets/images/empty-star.svg';
import fullStarSvg from '../assets/images/star-full.svg';

const MovieItem = ({
  credits,
  title,
  genre,
  vote_average,
  overview,
  poster_path,
  release_date,
  genre_ids,
  trailer,
  vote_count,
  movieDetails,
  onSetValueRate,
}) => {
  const [visibleTrailer, setVisibleTrailer] = React.useState(false);

  const newGenres = [];
  if (genre !== null) {
    for (let i = 0; i < genre_ids.length; i++) {
      const newItem = genre.genres.filter((item) => item.id === genre_ids[i]);
      newGenres.push(newItem[0]);
    }
  }

  const setRateValue = (val) => {
    onSetValueRate(val);
  };

  const blockOutRef = React.useRef();
  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setVisibleTrailer(false);
      }
    },
    [setVisibleTrailer],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (e.target.className && e.target.className === blockOutRef.current.className) {
        setVisibleTrailer(false);
      }
    },
    [blockOutRef, setVisibleTrailer],
  );
  React.useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  React.useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="movie-watch__item-wrapper">
      <div className="back">
        <Link to="/watchmovies">Back</Link>
      </div>
      <div className="movie-watch__item">
        <div
          ref={blockOutRef}
          className={classNames('movie-watch__item-blockout', {
            show: visibleTrailer,
          })}></div>
        <div
          className={classNames('trailer', {
            show: visibleTrailer,
          })}>
          <div className="trailer-block">
            <span onClick={() => setVisibleTrailer(false)}>
              <img src={closeSvg} alt="close svg" />
            </span>
            <iframe
              frameborder="0"
              allowfullscreen
              title="trailer"
              width="468"
              height="460"
              src={`https://www.youtube.com/embed/${
                trailer && trailer.results.length > 0 && trailer.results[0].key
              }?showinfo=0`}></iframe>
          </div>
        </div>
        <div className="container">
          <h4 className="movie-watch__item-title">{title}</h4>
          <div className="movie-watch__item-box">
            <div className="movie-watch__item-left">
              <div className="movie-watch__item-img">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movie img" />
              </div>
              <div className="movie-watch__item-trailer">
                <Button onClick={() => setVisibleTrailer(true)}>Watch Trailer</Button>
              </div>
            </div>
            <div className="movie-watch__item-right">
              <div className="movie-watch__item-info movie-watch__item-info--rating">
                Vote Average: <span>{vote_average}</span>
              </div>
              <div className="movie-watch__item-info">
                Vote Count: <span>{vote_count}</span>
              </div>
              <div className="movie-watch__item-info">
                Year: <span>{release_date}</span>
              </div>
              {movieDetails && movieDetails.tagline !== '' && (
                <div className="movie-watch__item-info">
                  Tagline: <span>{movieDetails.tagline}</span>
                </div>
              )}
              {movieDetails && movieDetails.budget > 0 && (
                <div className="movie-watch__item-info">
                  Budget: <span>{movieDetails.budget}$</span>
                </div>
              )}
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
              <div className="movie-watch__item-rate">
                <span className="movie-watch__item-rate-title">Rate movie: </span>
                <ReactStars
                  count={10}
                  isHalf={true}
                  onChange={setRateValue}
                  size={30}
                  value={vote_average}
                  activeColor="#ffd700"
                  emptyIcon={<img className="rate" src={emptyStarSvg} alt="star svg" />}
                  halfIcon={<img className="rate" src={halfStarSvg} alt="star svg" />}
                  filledIcon={<img className="rate" src={fullStarSvg} alt="star svg" />}
                />
              </div>
            </div>
          </div>
          <div className="movie-watch__item-about">
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
