import { createPortal } from 'react-dom';
import close from '../../../../../../images/close.png';
import eye from '../../../../../../images/eye.png';
import crossedEye from '../../../../../../images/crossed_eye.png';
import styles from './RegisterModal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../../../../store/slices/currentUserSlice';
import { NavLink } from 'react-router-dom';

const RegisterModal = ({ isShown, handleClose }) => {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const userData = {};

  const inputValidation = (evt) => {
    const inputName = evt.target.name;
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    let pattern;
    let key;

    const checkPattern = (pattern, key) => {
      if (evt.target.value.match(pattern)) {
        userData[key] = `${evt.target.value}`;
        spanEl.style.color = '#707070';
        evt.target.style.borderColor = '#707070';
      } else {
        evt.target.style.borderColor = 'red';
        spanEl.style.color = 'red';
      }
    };

    switch (inputName) {
      case 'name': //should contain only letters
        key = 'fullName';
        pattern = /^[a-zA-Z\s]+$/;
        checkPattern(pattern, key);
        break;

      case 'email': // should contain '@' and '.'
        key = 'email';
        pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        checkPattern(pattern, key);
        break;

      case 'phone': //should contain 10-14 digits and optional '+' in the beginning
        key = 'phone';
        pattern = /^(\+)?([0-9]){10,14}$/;
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

  const showMissingInfoMessage = (evt) => {
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    const pElement = document.createElement('p');
    const existingP = parentDiv.querySelector('p');

    if (!evt.target.value) {
      existingP && existingP.remove();
      pElement.innerText = 'The required data is missing';
      pElement.style.color = 'red';
      pElement.style.marginTop = '-20px';
      pElement.style.marginBottom = '5px';
      pElement.style.fontSize = '0.7rem';
      evt.target.style.borderColor = 'red';
      spanEl.style.color = 'red';
      parentDiv.append(pElement);
    } else {
      existingP && existingP.remove();
    }
  };

  const submitData = (evt) => {
    evt.preventDefault();
    dispatch(registerUser(userData));
    handleClose(isShown);
  };

  const content = (
    <>
      <div className={styles.blurBg}></div>
      <div className={styles.register}>
        <img
          className={styles.close}
          src={close}
          alt='Close'
          onClick={() => handleClose(isShown)}
        />
        <h3>Register</h3>
        <form action=''>
          <div className={styles.inputItem}>
            <label htmlFor='name'>
              <span>Full Name</span>
            </label>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              onChange={(evt) => inputValidation(evt)}
              onFocus={(evt) => showLabel(evt)}
              onBlur={(evt) => showMissingInfoMessage(evt)}
              required
              autoFocus
            />
          </div>
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
              onBlur={(evt) => showMissingInfoMessage(evt)}
              required
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor='phone'>
              <span>Telephone Number</span>
            </label>
            <input
              type='tel'
              name='phone'
              placeholder='Telephone Number'
              onChange={(evt) => inputValidation(evt)}
              onFocus={(evt) => showLabel(evt)}
              onBlur={(evt) => showMissingInfoMessage(evt)}
              required
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
              onBlur={(evt) => showMissingInfoMessage(evt)}
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
            value='Register'
            onClick={(evt) => submitData(evt)}
          />
        </form>
      </div>
      <div className={styles.logIn}>
        I already have an account, <NavLink>Log In</NavLink>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default RegisterModal;
