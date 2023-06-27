import styles from './UserSettings.module.css';
import {
  currentUser,
  token,
  getAccountData,
} from '../../../../store/slices/currentUserSlice';
import SettingsBlock from './SettingsBlock/SettingsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserSettings = () => {
  const dispatch = useDispatch();
  const userData = useSelector(currentUser);
  const userToken = useSelector(token);

  useEffect(() => {
    if (userToken) {
      dispatch(getAccountData(userToken));
    }
  }, [dispatch, userToken, userData]);

  const fullName = userData.fullName;
  const fullNameByWords = fullName.split(' ');
  const firstName = fullNameByWords[0];
  const lastName = fullNameByWords[fullNameByWords.length - 1];

  const firstNameInitial = firstName[0].toUpperCase();
  const lastNameInitial = lastName[0].toUpperCase();

  return (
    <div className={styles.userSettings}>
      <div className={styles.avatar}>{firstNameInitial + lastNameInitial}</div>
      <div className={styles.fullName}>{fullName}</div>

      <SettingsBlock />
    </div>
  );
};

export default UserSettings;
