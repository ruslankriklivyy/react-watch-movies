import React from 'react';
import classNames from 'classnames';

const Menu = React.memo(function Menu({ items, onSelectGenre }) {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSetActiveItem = (index, id, e) => {
    e.preventDefault();
    setActiveItem(index);
    onSelectGenre(id);
  };

  return (
    <div className="navigation">
      <div className="container">
        <ul className="menu">
          {items &&
            items.map((item, index) => (
              <li key={`${item.name}-${index}`} className="menu__item">
                <a
                  href="/"
                  onClick={(e) => onSetActiveItem(index, item.id, e)}
                  className={classNames('menu__item-link', {
                    active: index === activeItem,
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
