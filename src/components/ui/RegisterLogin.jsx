import React from 'react';
import { Register } from './Register';
import { LogIn } from './LogIn';
import delimiter from '../../images/vertical_bar.png';
import styles from '../../styles/components/ui/RegisterLogin.module.css';

export const RegisterLogin = () => {
  return (
    <div className={styles.registrationLogInBlock}>
      <Register />
      <img src={delimiter} alt='delimiter' />
      <LogIn />
    </div>
  );
};
