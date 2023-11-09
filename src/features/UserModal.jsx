import { createPortal } from 'react-dom';
import styles from '../styles/features/UserModal.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/slices/currentUserSlice';

const UserModal = ({ userData, isShown, handleClose }) => {
  const dispatch = useDispatch();
  const userFullName = userData.fullName;
  const userEmail = userData.email;

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
          <NavLink
            to='/settings/edit'
            className={styles.settings}
            onClick={() => handleClose(isShown)}
          >
            Settings
          </NavLink>
          <NavLink to='/' className={styles.logOut} onClick={handleLogOut}>
            Log Out
          </NavLink>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.getElementById('portal'));
};

export default UserModal;
