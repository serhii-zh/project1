import styles from '../styles/features/LogInModal.module.css';
import { createPortal } from 'react-dom';
import close from '../images/close.png';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormComponent } from '../components/FormComponent';
import {
  showLabel,
  checkForMissingData,
  validateInputValue,
  handleShowPassword,
} from '../services/formApi.js';
import { useSubmitForm } from '../hooks/useSubmitForm.js';

export const LogInModal = ({ isShown, handleClose }) => {
  const submitForm = useSubmitForm('logInForm');
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

  const logInFormFields = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
      required: true,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
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
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
      onBlur: checkForMissingData,
      handleShowPassword: () => handleShowPassword('password', setShowPassword),
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
          fields={logInFormFields}
          showPassword={showPassword}
          submitFormData={(evt) => {
            submitForm(evt, formData, handleClose, isShown);
          }}
        />
      </div>
      <div className={styles.register}>
        I don't have an account, <NavLink>Register</NavLink>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};
