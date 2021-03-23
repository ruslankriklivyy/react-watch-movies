import React from 'react';
import { useSelector } from 'react-redux';
import loupeSvg from '../assets/images/loupe.svg';
import { RootState } from '../redux/reducers/index';

type SearchMovieType = {
  onSearch: (text: string) => void;
};

const SearchMovie: React.FC<SearchMovieType> = React.memo(function SearchMovie({ onSearch }) {
  const searchValue = useSelector((state: RootState) => {
    return state.movies.searchValue;
  });

  const onChangeInputValue = React.useCallback(
    (text) => {
      onSearch(text);
    },
    [onSearch],
  );

  return (
    <div className="header__search">
      <input
        onChange={(e) => onChangeInputValue(e.target.value)}
        type="text"
        value={searchValue}
        placeholder="Search Movies"
      />
      <span>
        <img src={loupeSvg} alt="loupe svg" />
      </span>
    </div>
  );
});

export default SearchMovie;
