import { createPortal } from 'react-dom';
import close from '../../images/close.png';
import styles from './RegisterModal.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/thunks/userThunks';
import { NavLink } from 'react-router-dom';
import FormComponent from '../../components/Form/FormComponent';

const RegisterModal = ({ isShown, handleClose }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

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
    dispatch(registerUser(formData));
    handleClose(isShown);
  };

  const fields1 = [
    {
      type: 'text',
      name: 'fullName',
      placeholder: 'Full Name',
      pattern: '^[a-zA-Z\\s]*$',
      autofocus: true,
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
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
      type: 'tel',
      name: 'phone',
      placeholder: 'Telephone Number',
      pattern: '^(\\+)?([0-9]){10,14}$',
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
      value: 'Register',
    },
  ];

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
        <FormComponent
          fields={fields1}
          showPassword={showPassword}
          submitFormData={submitFormData}
        />
      </div>
      <div className={styles.logIn}>
        I already have an account, <NavLink>Log In</NavLink>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default RegisterModal;
