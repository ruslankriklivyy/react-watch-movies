import React from 'react';
import classNames from 'classnames';
import { setUsers } from '../redux/actions/auth';
import { Button } from './';
import { getUser } from '../redux/actions/auth';

import { useDispatch, useSelector } from 'react-redux';
import cancelSvg from '../assets/images/close.svg';

const Login = ({ visibleForm, onSetVisible, onClose, blockOutRef }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(({ auth }) => auth);
  const [usernameValue, setUserName] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  // 6JK37P3vvr@4YPY

  const onSend = () => {
    dispatch(getUser(user.username, user.password, token.request_token));
  };

  React.useEffect(() => {
    dispatch(setUsers(usernameValue, passwordValue));
  }, [dispatch, usernameValue, passwordValue]);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (e.target.className && e.target.className === blockOutRef.current.className) {
        onClose();
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
            <label htmlFor="name">Your Name</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={usernameValue}
              name="name"
              type="text"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Your Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={passwordValue}
              name="password"
              type="text"
              required
            />
          </div>
          <Button required onClick={() => onSend()} type="button">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
