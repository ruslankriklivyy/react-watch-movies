import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import loupeSvg from '../assets/images/loupe.svg';

const Header = ({ onSearch }) => {
  const searchValue = useSelector(({ movies }) => movies.searchValue);
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInputValue = (text) => {
    setInputValue(text);
    onSearch(text);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              Watch <span>Movies!</span>
            </Link>
          </div>
          <div className="header__search">
            <input
              onChange={(e) => onChangeInputValue(e.target.value)}
              type="text"
              value={searchValue}
              placeholder="Search Movies"
            />
            <span>
              <img src={loupeSvg} alt="loupe svg" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
