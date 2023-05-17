import { createPortal } from 'react-dom';
import close from '../../../../../../images/close.png';
import eye from '../../../../../../images/eye.png';
import crossedEye from '../../../../../../images/crossed_eye.png';
import styles from './LogInModal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../../../store/slices/currentUserSlice';
import { NavLink } from 'react-router-dom';

const LogInModal = ({ isShown, handleClose }) => {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  let userData = {};

  const inputValidation = (evt) => {
    const inputName = evt.target.name;
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    let pattern;
    let key;

    const checkPattern = (pattern, key) => {
      if (evt.target.value.match(pattern)) {
        userData[key] = evt.target.value;
        spanEl.style.color = '#707070';
        evt.target.style.borderColor = '#707070';
      } else {
        evt.target.style.borderColor = 'red';
        spanEl.style.color = 'red';
      }
    };

    switch (inputName) {
      case 'email': // should contain '@' and '.'
        key = 'email';
        pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        checkPattern(pattern, key);
        break;

      case 'password': // should contain at least 1 letter, 1 special symbol, 1 digit
        key = 'password';
        pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;
        checkPattern(pattern, key);
        break;

      default:
        break;
    }
  };

  const handleShowPassword = () => {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
      setShowPassword(false);
      passwordField.type = 'text';
    } else {
      setShowPassword(true);
      passwordField.type = 'password';
    }
  };

  const showLabel = (evt) => {
    const parentDiv = evt.target.closest('div');
    const existingP = parentDiv.querySelector('p');
    existingP && existingP.remove();
    evt.target.placeholder = '';
    const spanEl = parentDiv.children[0].children[0];
    spanEl.style.visibility = 'visible';
  };

  const submitData = (evt) => {
    evt.preventDefault();
    dispatch(logInUser(userData));
    handleClose(isShown);
  };

  const content = (
    <>
      <div className={styles.blurBg}></div>
      <div className={styles.logIn}>
        <img
          className={styles.close}
          src={close}
          alt='Close'
          onClick={() => handleClose(isShown)}
        />
        <h3>Log In</h3>
        <form action=''>
          <div className={styles.inputItem}>
            <label htmlFor='email'>
              <span>Email</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={(evt) => inputValidation(evt)}
              onFocus={(evt) => showLabel(evt)}
              required
              autoFocus
            />
          </div>

          <div className={styles.inputItem}>
            <label htmlFor='password'>
              <span>Password</span>
            </label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              onChange={(evt) => inputValidation(evt)}
              onFocus={(evt) => showLabel(evt)}
              required
            />
            <img
              src={showPassword ? eye : crossedEye}
              alt='Show/hide password'
              className={styles.showPassword}
              onClick={() => handleShowPassword()}
            />
            <p className={styles.passwordInfo}>
              The password should contain 1 letter, 1special symbol, 1 number
            </p>
          </div>
          <input
            type='submit'
            value='Log In'
            onClick={(evt) => submitData(evt)}
          />
        </form>
      </div>
      <div className={styles.register}>
        I don't have an account, <NavLink>Register</NavLink>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default LogInModal;
