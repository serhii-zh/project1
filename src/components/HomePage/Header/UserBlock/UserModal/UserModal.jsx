import { createPortal } from 'react-dom';
import styles from './UserModal.module.css';
import { NavLink } from 'react-router-dom';

const UserModal = ({ user, isShown, handleClose }) => {
  const userFullName = user.account.fullName;
  const userEmail = user.account.email;

  const content = (
    <>
      <div
        className={styles.userModalBg}
        onClick={() => handleClose(isShown)}
      ></div>
      <div className={styles.userModal}>
        <div className={styles.userNameEmail}>
          <div className={styles.userName}>{userFullName}</div>
          <div className={styles.userEmail}>{userEmail}</div>
        </div>
        <hr />
        <div className={styles.settingsLogOut}>
          <NavLink className={styles.settings}>Settings</NavLink>
          <NavLink className={styles.logOut}>Log Out</NavLink>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default UserModal;
