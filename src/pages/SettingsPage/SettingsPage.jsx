import styles from './SettingsPage.module.css';
import { currentUser } from '../../store/slices/currentUserSlice';
import { getAccountData } from '../../store/thunks/userThunks';
import SettingsContainer from '../../containers/SettingsContainer/SettingsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(currentUser);

  useEffect(() => {
    dispatch(getAccountData());
  }, [dispatch]);

  const fullName = userData.fullName;
  const fullNameByWords = fullName.split(' ');
  const firstName = fullNameByWords[0];
  const lastName = fullNameByWords[fullNameByWords.length - 1];

  const firstNameInitial = firstName[0].toUpperCase();
  const lastNameInitial = lastName[0].toUpperCase();

  return (
    <div className={styles.settingsPage}>
      <div className={styles.avatar}>{firstNameInitial + lastNameInitial}</div>
      <div className={styles.fullName}>{fullName}</div>

      <SettingsContainer />
    </div>
  );
};

export default SettingsPage;
