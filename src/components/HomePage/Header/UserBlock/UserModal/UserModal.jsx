import { createPortal } from 'react-dom';
import styles from './UserModal.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../store/slices/currentUserSlice';

const UserModal = ({ user, isShown, handleClose }) => {
  const dispatch = useDispatch();

  const userFullName = user.account.fullName;
  const userEmail = user.account.email;

  const handleLogOut = () => {
    dispatch(logOut());
  };

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
          <NavLink className={styles.logOut} onClick={handleLogOut}>
            Log Out
          </NavLink>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default UserModal;
