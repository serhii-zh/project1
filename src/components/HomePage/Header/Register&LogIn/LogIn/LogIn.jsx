import styles from './LogIn.module.css';
import { useState } from 'react';
import LogInModal from './LogInModal/LogInModal';

const LogIn = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };
  return (
    <>
      <a href='#' onClick={() => handleClick(isShown)} className={styles.login}>
        LOG IN
      </a>
      {isShown && <LogInModal isShown={isShown} handleClose={handleClick} />}
    </>
  );
};

export default LogIn;
