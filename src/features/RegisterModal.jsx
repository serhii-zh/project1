import { createPortal } from 'react-dom';
import close from '../images/close.png';
import styles from '../styles/features/RegisterModal.module.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FormComponent } from '../components/FormComponent';
import {
  showLabel,
  checkForMissingData,
  validateInputValue,
  handleShowPassword,
} from '../services/formApi.js';
import { useSubmitForm } from '../hooks/useSubmitForm.js';

export const RegisterModal = ({ isShown, handleClose }) => {
  const submitForm = useSubmitForm('register');
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

  const fields1 = [
    {
      type: 'text',
      name: 'fullName',
      placeholder: 'Full Name',
      pattern: '^[a-zA-Z\\s]*$',
      autofocus: true,
      required: true,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
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
      type: 'tel',
      name: 'phone',
      placeholder: 'Telephone Number',
      pattern: '^(\\+)?([0-9]){10,14}$',
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
          submitFormData={(evt) => {
            submitForm(evt, formData, handleClose, isShown);
          }}
        />
      </div>
      <div className={styles.logIn}>
        I already have an account, <NavLink>Log In</NavLink>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};
