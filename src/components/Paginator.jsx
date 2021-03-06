import React from 'react';
import Button from './Button';

const Paginator = ({ onSelectPage }) => {
  let [page, setPage] = React.useState(1);

  const onNextPage = (e) => {
    e.preventDefault();
    onSelectPage(page + 1);
    setPage(page + 1);
  };

  const onPrevPage = (e) => {
    e.preventDefault();
    if (page !== 1) {
      onSelectPage(page - 1);
      setPage(page - 1);
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
