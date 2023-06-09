import { useDispatch, useSelector } from 'react-redux';
import styles from './Categories.module.css';
import { useEffect } from 'react';
import {
  categoriesList,
  getCategoriesList,
} from '../../../../../../store/slices/categoriesSlice';
import {
  clearData,
  setSelectedCategoryId,
} from '../../../../../../store/slices/productsSlice';

const Categories = () => {
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

export default Categories;
