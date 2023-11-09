import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/components/CategoriesDropdown.module.css';
import { useEffect } from 'react';
import { categoriesList } from '../store/slices/categoriesSlice';
import {
  clearData,
  setSelectedCategoryId,
} from '../store/slices/productsSlice';
import { getCategoriesList } from '../store/thunks/categoriesThunks,';

export const CategoriesDropdown = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesList);

  useEffect(() => {
    dispatch(getCategoriesList());
  }, [dispatch]);

  const handleChange = (evt) => {
    const id = evt.target.options[evt.target.selectedIndex].id;
    dispatch(clearData());
    dispatch(setSelectedCategoryId(id));
  };

  return (
    <select
      className={styles.categories}
      name='category-dropdown'
      id='category-dropdown'
      placeholder='Choose category'
      defaultValue={'default'}
      onChange={handleChange}
    >
      <option value='default' disabled hidden>
        Choose category
      </option>
      <option id='0' value='all'>
        All
      </option>
      {categories.map((c) => (
        <option key={c.id} id={c.id} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
};
