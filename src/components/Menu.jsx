import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const Menu = React.memo(function Menu({ items, onSelectGenre }) {
  const { genreId } = useSelector(({ filters }) => filters);

  const onSetActiveItem = (id, e) => {
    e.preventDefault();
    onSelectGenre(id);
  };

  return (
    <div className="navigation">
      <div className="container">
        <ul className="menu">
          {items &&
            items.map((item) => (
              <li key={`${item.name}-${item.id}`} className="menu__item">
                <a
                  href="/"
                  onClick={(e) => onSetActiveItem(item.id, e)}
                  className={classNames('menu__item-link', {
                    active: item.id === genreId,
                  })}>
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

export default Menu;
