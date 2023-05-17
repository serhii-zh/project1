import styles from './UserSettings.module.css';
import { currentUser } from '../../../../store/slices/currentUserSlice';
import SettingsBlock from './SettingsBlock/SettingsBlock';

const UserSettings = () => {
  const fullName = currentUser.account.fullName;
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
