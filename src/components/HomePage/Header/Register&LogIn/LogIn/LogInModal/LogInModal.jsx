import { createPortal } from 'react-dom';
import close from '../../../../../../images/close.png';
import styles from './LogInModal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../../../store/slices/currentUserSlice';
import { NavLink } from 'react-router-dom';
import FormComponent from '../../../../../Form/FormComponent';

const LogInModal = ({ isShown, handleClose }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const showLabel = (evt) => {
    const parentDiv = evt.target.closest('div');
    const pElement = parentDiv.querySelector('p');
    pElement.innerText = '';
    evt.target.placeholder = '';
    const spanEl = parentDiv.children[0].children[0];
    spanEl.style.visibility = 'visible';
  };

  const validateInputValue = (evt) => {
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    const pattern = evt.target.pattern;

    if (evt.target.value.match(pattern)) {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
      });

      spanEl.style.color = '#707070';
      evt.target.style.borderColor = '#707070';
    } else {
      spanEl.style.color = 'red';
      evt.target.style.borderColor = 'red';
    }
  };

  const checkForMissingData = (evt) => {
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    const pElement = parentDiv.querySelector('p');

    if (!evt.target.value) {
      pElement.innerText = '';
      pElement.innerText = 'The required data is missing';
      pElement.style.color = 'red';
      evt.target.style.borderColor = 'red';
      spanEl.style.color = 'red';
      parentDiv.append(pElement);
    } else {
      pElement.innerText = '';
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

  const submitFormData = (evt) => {
    evt.preventDefault();
    dispatch(logInUser(formData));
    handleClose(isShown);
  };

  const fields1 = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      pattern:
        '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,35}$',
      required: true,
      message:
        'The password should contain 1 letter, 1 special symbol, 1 number',
      onChange: validateInputValue,
      onFocus: showLabel,
      onBlur: checkForMissingData,
      handleShowPassword,
    },
    {
      type: 'submit',
      name: 'registerUser',
      value: 'Log In',
    },
  ];

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
        <FormComponent
          fields={fields1}
          showPassword={showPassword}
          submitFormData={submitFormData}
        />
      </div>
      <div className={styles.register}>
        I don't have an account, <NavLink>Register</NavLink>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default LogInModal;
