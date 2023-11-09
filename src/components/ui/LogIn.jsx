import styles from '../../styles/components/ui/LogIn.module.css';
import { useState } from 'react';
import LogInModal from '../../features/LogInModal';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };
  return (
    <>
      <NavLink onClick={() => handleClick(isShown)} className={styles.login}>
        LOG IN
      </NavLink>
      {isShown && <LogInModal isShown={isShown} handleClose={handleClick} />}
    </>
  );
};

export default LogIn;
