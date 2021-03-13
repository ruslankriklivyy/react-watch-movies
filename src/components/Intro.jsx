import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Intro = ({ items, setId }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="intro">
      <div className="container">
        <div className="intro__main">
          <div className="intro__block">
            <h1 className="intro__title">Popcorn, please!</h1>
            <Link to={'/watchmovies'}>Start Watching</Link>
          </div>
          <div className="intro-top-movies">
            <Slider {...settings}>
              {items &&
                items.results.slice(0, 4).map((item) => (
                  <Link
                    to={`/watchmovies/${item.id}`}
                    onClick={() => setId(item.id)}
                    className="intro-top-movies__item">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt="img movie"
                    />
                  </Link>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
