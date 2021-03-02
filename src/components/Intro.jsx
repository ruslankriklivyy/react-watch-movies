import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__main">
          <div className="intro__block">
            <h1 className="intro__title">Popcorn, please!</h1>
            <Link to={'/watchmovies'}>Start Watching</Link>
          </div>
          <div className="intro-top-movies">
            <Carousel
              className="carousel-wrapper"
              showArrows={false}
              isRTL={true}
              initialFirstItem={0}
              enableMouseSwipe={false}
              itemsToShow={2}>
              <div className="intro-top-movies__item">
                <img
                  src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/11/IMG_2167-2.jpeg"
                  alt="img movie"
                />
              </div>
              <div className="intro-top-movies__item">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg"
                  alt="img movie"
                />
              </div>
              <div className="intro-top-movies__item">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/A1PaCX4oXjL._AC_SL1500_.jpg"
                  alt="img movie"
                />
              </div>
              <div className="intro-top-movies__item">
                <img
                  src="https://i.pinimg.com/originals/d1/2a/a6/d12aa686c0838fd94581bf14625b03fd.png"
                  alt="img movie"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
