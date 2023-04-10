import { useState } from 'react';
import styles from './Register.module.css';
import RegisterModal from './RegisterModal/RegisterModal';
import { getRegData } from '../../../../../store/slices/registrationSlice';

const Register = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };

// console.log(getRegData())

  return (
    <>
      <a
        href='#'
        onClick={() => handleClick(isShown)}
        className={styles.register}
      >
        REGISTER
      </a>
      {isShown && <RegisterModal isShown={isShown} handleClose={handleClick} />}
    </>
  );
};

export default Register;
