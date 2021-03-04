import React from 'react';
import classNames from 'classnames';

const Menu = React.memo(function Menu({ items, onSelectGenre }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSetActiveItem = (index, e) => {
    e.preventDefault();
    setActiveItem(index);
    onSelectGenre(index);
  };

  return (
    <div className="navigation">
      <div className="container">
        <ul className="menu">
          <li>
            <a
              href="/"
              onClick={(e) => onSetActiveItem(null, e)}
              className={classNames('menu__item-link', {
                active: null === activeItem,
              })}>
              All
            </a>
          </li>
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="menu__item">
              <a
                href="/"
                onClick={(e) => onSetActiveItem(index, e)}
                className={classNames('menu__item-link', {
                  active: index === activeItem,
                })}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Menu;
