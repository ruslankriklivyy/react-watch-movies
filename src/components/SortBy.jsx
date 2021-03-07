import React from 'react';
import Slider from 'react-rangeslider';
import classNames from 'classnames';
import 'react-rangeslider/lib/index.css';

import starSvg from '../assets/images/star.svg';

const SortBy = ({ items, onSelectFilter, onSelectRate }) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [value, setValue] = React.useState(5);

  const onSetActiveItem = (index, e) => {
    e.preventDefault();
    setActiveItem(index);
    onSelectFilter(index);
  };

  React.useEffect(() => {
    const localStorageRefRate = localStorage.getItem('rateNumber');
    setValue(localStorageRefRate);
  }, []);

  const handleChange = (val) => {
    setValue(val);
    onSelectRate(value);
  };

  return (
    <div className="sortby">
      <div className="container">
        <div className="sortby-box">
          <div className="sortby-left">
            <h4 className="sortby__title">Sort by:</h4>
            <ul className="sortby-menu">
              {items.map((item, index) => (
                <li key={`${item.name}-${index}`} className="sortby-menu__item">
                  <a
                    href="/"
                    onClick={(e) => onSetActiveItem(index, e)}
                    className={classNames('sortby-menu__item-link', {
                      active: index === activeItem,
                    })}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sortby-right">
            <div className="slider">
              <img src={starSvg} alt="star svg" />
              <Slider min={0} max={10} value={value} onChange={handleChange} />

              <span>{value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
