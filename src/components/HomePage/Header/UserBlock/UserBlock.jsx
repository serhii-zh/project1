import { currentUser } from '../../../../store/slices/currentUserSlice';
import showOptions from '../../../../images/down_smbl.png';
import styles from './UserBlock.module.css';
import UserModal from './UserModal/UserModal';
import { useState } from 'react';

const UserBlock = () => {
  const [isShown, setIsShown] = useState(false);

  const fullName = currentUser.account.fullName;
  const fullNameByWords = fullName.split(' ');
  const firstName = fullNameByWords[0];
  const lastName = fullNameByWords[fullNameByWords.length - 1];

  const firstNameInitial = firstName[0].toUpperCase();
  const lastNameInitial = lastName[0].toUpperCase();

  const handleOptionsClick = (isShown) => {
    setIsShown(!isShown);
  };

  return (
    <div className={styles.userBlock}>
      Welcome, {firstName}!
      <div className={styles.initials}>
        {firstNameInitial + lastNameInitial}
      </div>
      <img
        className={styles.optionsBtn}
        src={showOptions}
        alt='Options'
        onClick={() => handleOptionsClick(isShown)}
      />
      {isShown && (
        <UserModal
          user={currentUser}
          isShown={isShown}
          handleClose={handleOptionsClick}
        />
      )}
    </div>
  );
};

export default UserBlock;
