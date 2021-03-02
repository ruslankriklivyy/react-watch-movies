import React from 'react';
import classNames from 'classnames';
import { Button } from './';

import cancelSvg from '../assets/images/close.svg';

const Login = ({ visibleForm, onSetVisible, onClose, blockOutRef }) => {
  const popupRef = React.useRef();
  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose(false);
      }
    },
    [onClose],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (
        e.target.className &&
        e.target.className === blockOutRef &&
        blockOutRef.current.className
      ) {
        onClose(false);
      }
    },
    [blockOutRef, onClose],
  );
  React.useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  return (
    <div
      ref={popupRef}
      className={classNames('login', {
        show: visibleForm,
      })}>
      <div className="login-wrapper">
        <h4 className="form-name">Login</h4>
        <div onClick={() => onSetVisible()} className="login-close">
          <img src={cancelSvg} alt="cancel svg" />
        </div>
        <form className="main-form">
          <div className="form-item">
            <label htmlFor="email">Your E-mail</label>
            <input name="email" type="text" />
          </div>
          <div className="form-item">
            <label htmlFor="password">Your Password</label>
            <input name="password" type="text" />
          </div>
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
