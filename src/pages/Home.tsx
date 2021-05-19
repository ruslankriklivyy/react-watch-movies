import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { getNowFilms } from '../redux/movies';
import { RootState } from '../redux/index';
import { HeaderHome, Intro } from '../components';
import { SessionId, Token } from '../interfaces/interfaces';

const links = ['Home', 'Watch Movies!'];

interface IHome {
  token: Token;
  sessionId: SessionId;
  setId: (id: number) => void;
}

const Home: React.FC<IHome> = ({ token, sessionId, setId }) => {
  const dispatch = useDispatch();
  const nowPlayingFilms = useSelector((state: RootState) => state.movies.nowPlayingFilms);
  const blockOutRef = React.useRef(null);
  const [visibleLoginForm, setVisibleLoginForm] = React.useState(false);

  React.useEffect(() => {
    dispatch(getNowFilms());
  }, [dispatch]);

  return (
    <div
      ref={blockOutRef}
      className={classNames('home', {
        blockout: visibleLoginForm,
      })}>
      <HeaderHome token={token} sessionId={sessionId} items={links} />
      <Intro setId={setId} items={nowPlayingFilms} />
    </div>
  );
};

export default Home;
