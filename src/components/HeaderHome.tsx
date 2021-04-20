import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import logoPng from '../assets/images/logo.png';
import userSvg from '../assets/images/user.svg';
import { Button } from '.';
import { Token, SessionId } from '../types/types';

type HeaderHomeType = {
  items: Array<string>;
  token: Token;
  sessionId: SessionId;
};

const HeaderHome: React.FC<HeaderHomeType> = ({ items, token, sessionId }) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSetActiveItem = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="home-header">
      <div className="container">
        <div className="home-header__inner">
          <div className="home-header__logo">
            <img src={logoPng} alt="logo png" />
          </div>
          <div className="home-header__nav">
            <ul className="home-header__menu">
              {items.map((item, index) => (
                <li key={`${item}-${index}`} className="home-header__menu-item">
                  <Link
                    to={`/${item.split(' ').join('').split('!').join('').toLowerCase()}`}
                    onClick={(e) => onSetActiveItem(index)}
                    className={classNames('home-header__menu-item-link', {
                      active: index === activeItem,
                    })}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-header-btns">
            {sessionId?.success ? (
              <span>
                <img src={userSvg} alt="user svg" />
              </span>
            ) : (
              <a href={`https://www.themoviedb.org/authenticate/${token && token.request_token}`}>
                <Button>Login</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
