import styles from './Sorting.module.css';

const Sorting = () => {
  return (
    <select
      className={styles.sorting}
      name='sorting-dropdown'
      id='sorting-dropdown'
      placeholder='Sorting'
      defaultValue={'default'}
    >
      <option value='default' disabled hidden>
        Sorting
      </option>
      <option value='latest'>Latest</option>
      <option value='popular'>Popular</option>
    </select>
  );
};

export default Sorting;
