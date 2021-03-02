import React from 'react';
import classNames from 'classnames';

import { HeaderHome, Intro, Login, Registration } from '../components';

const links = ['Home', 'About', 'Contact', 'Watch Movies!'];

const Home = () => {
  const blockOutRef = React.useRef();
  const [visibleLoginForm, setVisibleLoginForm] = React.useState(false);
  const [visibleRegistrationForm, setVisibleRegistrationForm] = React.useState(false);

  const onSetVisibleLoginForm = () => {
    setVisibleLoginForm(!visibleLoginForm);
  };

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
        blockout: visibleLoginForm || visibleRegistrationForm,
      })}>
      <HeaderHome
        items={links}
        onSetVisibleLogin={onSetVisibleLoginForm}
        onSetVisibleRegistration={onSetRegistrationForm}
      />
      <Intro />
      <Login
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
      />
    </div>
  );
};

export default Home;
