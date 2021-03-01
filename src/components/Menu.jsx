import React from 'react';
import classNames from 'classnames';

const Menu = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSetActiveItem = (index, e) => {
    e.preventDefault();
    setActiveItem(index);
  };

  return (
    <div className="navigation">
      <div className="container">
        <ul className="menu">
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
};

export default Menu;
