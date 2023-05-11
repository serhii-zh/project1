import { useSelector } from 'react-redux';
import styles from './UserSettings.module.css';
import { currentUser } from '../../../../store/slices/currentUserSlice';
import { NavLink, Route, Routes } from 'react-router-dom';

const UserSettings = () => {
  const user = useSelector(currentUser);

  const fullName = user.account.fullName;
  const fullNameByWords = fullName.split(' ');
  const firstName = fullNameByWords[0];
  const lastName = fullNameByWords[fullNameByWords.length - 1];

  const firstNameInitial = firstName[0].toUpperCase();
  const lastNameInitial = lastName[0].toUpperCase();

  return (
    <div className={styles.userSettings}>
      <div className={styles.avatar}>{firstNameInitial + lastNameInitial}</div>
      <div className={styles.fullName}>{fullName}</div>
      <div className={styles.menu}>
        <NavLink to='edit' className={styles.editAccount} autoFocus>
          Edit Account
        </NavLink>
        <NavLink to='orders' className={styles.ordersHistory}>
          Orders History
        </NavLink>
        <NavLink to='favorites' className={styles.favorites}>
          Favorites
        </NavLink>
      </div>
      <div className={styles.optionContent}>
        <Routes>
          <Route path='edit' element={<div>edit</div>} />
          <Route path='orders' element={<div>orders</div>} />
          <Route path='favorites' element={<div>favorites</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default UserSettings;
