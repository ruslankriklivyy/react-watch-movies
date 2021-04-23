import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { GenresItemType } from '../types/types';
import { RootState } from '../redux/index';

type MenuType = {
  items: Array<GenresItemType>;
  onSelectGenre: (id: number) => void;
};

const Menu: React.FC<MenuType> = React.memo(function Menu({ items, onSelectGenre }) {
  const { genreId } = useSelector((state: RootState) => state.filters);

  const onSetActiveItem = (id: number, e: React.MouseEvent) => {
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
