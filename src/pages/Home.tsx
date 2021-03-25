import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getNowFilms } from '../redux/actions/movies';
import { getToken } from '../redux/actions/auth';
import { RootState } from '../redux/reducers/index';
import { HeaderHome, Intro, Login, Registration } from '../components';
import { SessionId } from '../types/types';

const links = ['Home', 'Watch Movies!'];

type HomeType = {
  token: string;
  sessionId: SessionId;
  setId: (id: number) => void;
};

const Home: React.FC<HomeType> = ({ token, sessionId, setId }) => {
  const dispatch = useDispatch();
  const nowPlayingFilms = useSelector((state: RootState) => {
    return state.movies.nowPlayingFilms;
  });
  const blockOutRef = React.useRef(null);
  const [visibleLoginForm, setVisibleLoginForm] = React.useState(false);
  const [visibleRegistrationForm, setVisibleRegistrationForm] = React.useState(false);

  const onSetVisibleLoginForm = () => {
    setVisibleLoginForm(!visibleLoginForm);
  };

  React.useEffect(() => {
    dispatch(getNowFilms());
  }, [dispatch]);

  const onCloseLogin = () => {
    setVisibleLoginForm(false);
  };

  const onSetRegistrationForm = () => {
    setVisibleRegistrationForm(!visibleRegistrationForm);
  };

  const onCloseRegistration = () => {
    setVisibleRegistrationForm(false);
  };

  return (
    <div
      ref={blockOutRef}
      className={classNames('home', {
        blockout: visibleLoginForm,
      })}>
      <HeaderHome
        token={token}
        sessionId={sessionId}
        items={links}
        onSetVisibleLogin={onSetVisibleLoginForm}
        // onSetVisibleRegistration={onSetRegistrationForm}
      />
      <Intro setId={setId} items={nowPlayingFilms} />
      {/* <Login
        blockOutRef={blockOutRef}
        visibleForm={visibleLoginForm}
        onClose={onCloseLogin}
        onSetVisible={onSetVisibleLoginForm}
      />
      <Registration
        onClose={onCloseRegistration}
        blockOutRef={blockOutRef}
        visibleForm={visibleRegistrationForm}
        onSetVisible={onSetRegistrationForm}
      /> */}
    </div>
  );
};

export default Home;
