import React from 'react';
import Slider from 'react-rangeslider';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/reducers/index';
import { SortByTypeType } from '../types/types';

import starSvg from '../assets/images/star.svg';

import 'react-rangeslider/lib/index.css';

type SortByType = {
  items: Array<SortByTypeType>;
  onSelectFilter: (index: number) => void;
  onSelectRate: (val: number) => void;
};

const SortBy: React.FC<SortByType> = React.memo(function SortBy({
  items,
  onSelectFilter,
  onSelectRate,
}) {
  const { sortType, rateNumber } = useSelector((state: RootState) => state.filters);

  const onSetActiveItem = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    onSelectFilter(index);
  };

  const onHandleChange = (val: number) => {
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
              <Slider min={0} max={10} value={rateNumber} onChange={onHandleChange} />
              <span>{rateNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SortBy;
