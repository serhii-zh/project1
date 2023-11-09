import { useState } from 'react';
import styles from '../../styles/components/ui/Register.module.css';
import { RegisterModal } from '../../features/RegisterModal';
import { NavLink } from 'react-router-dom';

export const Register = () => {
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
