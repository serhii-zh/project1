import { useDispatch } from 'react-redux';
import { changeSortBy, clearData } from '../store/slices/productsSlice';
import styles from '../styles/components/SortingDropdown.module.css';

export const SortingDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(clearData());
    dispatch(changeSortBy(value));
  };

  return (
    <select
      className={styles.sorting}
      name='sorting-dropdown'
      id='sorting-dropdown'
      placeholder='Sorting'
      defaultValue={'default'}
      onChange={handleChange}
    >
      <option value='default' disabled hidden>
        Sorting
      </option>
      <option value='latest'>Latest</option>
      <option value='popular'>Popular</option>
    </select>
  );
};
