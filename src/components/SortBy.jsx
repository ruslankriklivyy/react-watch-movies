import React from 'react';
import classNames from 'classnames';

import starSvg from '../assets/images/star.svg';

const SortBy = ({ items, onSelectFilter }) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSetActiveItem = (index, e) => {
    e.preventDefault();
    setActiveItem(index);
    onSelectFilter(index);
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
            <div className="sortby-stars">
              <img src={starSvg} alt="star svg" />
              <div className="sortby-set"></div>
              <span>5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
