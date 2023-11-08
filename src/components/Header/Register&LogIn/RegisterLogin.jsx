import React from 'react'
import Register from './Register/Register'
import LogIn from './LogIn/LogIn'
import delimiter from '../../../images/vertical_bar.png';
import styles from './RegisterLogin.module.css'

const RegisterLogin = () => {
  return (
    <div className={styles.registrationLogInBlock}>
        <Register />
          <img src={delimiter} alt='delimiter' />
          <LogIn />
    </div>
  )
}

export default RegisterLogin