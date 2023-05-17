import styles from './EditAccount.module.css';

const EditAccount = () => {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Main Information</div>
        <form action=''>
          <input type='text' name='' id='' />
          <input type='text' name='' id='' />
          <input type='text' name='' id='' />
          <input type='text' name='' id='' />
          <input type='text' name='' id='' />
          <input type='text' name='' id='' />
          <button>Save</button>
        </form>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Change Password</div>
        <form action=''>
          <input type='password' name='' id='' />
          <input type='password' name='' id='' />
          <input type='password' name='' id='' />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditAccount;
