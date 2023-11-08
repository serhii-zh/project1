import { useState } from 'react';
import styles from './Register.module.css';
import RegisterModal from '../../../../features/RegisterModal/RegisterModal';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };

  return (
    <>
      <NavLink onClick={() => handleClick(isShown)} className={styles.register}>
        REGISTER
      </NavLink>
      {isShown && <RegisterModal isShown={isShown} handleClose={handleClick} />}
    </>
  );
};

export default Register;
