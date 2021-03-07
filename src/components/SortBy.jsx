import React from 'react';
import Slider from 'react-rangeslider';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import 'react-rangeslider/lib/index.css';

import starSvg from '../assets/images/star.svg';

const SortBy = ({ items, onSelectFilter, onSelectRate }) => {
  const { sortType, rateNumber } = useSelector(({ filters }) => filters);

  const onSetActiveItem = (index, e) => {
    e.preventDefault();
    onSelectFilter(index);
  };

  const handleChange = (val) => {
    onSelectRate(val);
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
                      active: item.type === sortType.type,
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
              <Slider min={0} max={10} value={rateNumber} onChange={handleChange} />

              <span>{rateNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
