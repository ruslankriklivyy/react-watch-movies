import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';

import createPages from '../utils/createPages';

type PaginatorType = {
  onSelectPage: (num: number) => void;
};

const Paginator: React.FC<PaginatorType> = ({ onSelectPage }) => {
  const { currentPage, totalPages } = useSelector((state: RootState) => state.filters);
  const perPage = 5;
  const countPages = Math.ceil(totalPages / perPage);
  const pages: Array<number> = [];
  createPages(pages, countPages, currentPage);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((num, index) => (
          <li
            key={`${num}-${index}`}
            onClick={() => onSelectPage(num)}
            className={classNames('page-item', {
              active: num === currentPage,
            })}>
            {num}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
