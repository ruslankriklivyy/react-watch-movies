import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';

const Paginator = ({ onSelectPage }) => {
  const { currentPage } = useSelector(({ filters }) => filters);

  const onNextPage = (e) => {
    e.preventDefault();
    onSelectPage(currentPage + 1);
  };

  const onPrevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) {
      onSelectPage(currentPage - 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <Button onClick={(e) => onPrevPage(e)}>Prev page</Button>
        </li>
        <li className="page-item">
          <Button onClick={(e) => onNextPage(e)}>Next page</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
