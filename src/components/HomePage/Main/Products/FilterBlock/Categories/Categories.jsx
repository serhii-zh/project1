import styles from './Categories.module.css';

const Categories = () => {
  return (
    <select
      className={styles.categories}
      name='category-dropdown'
      id='category-dropdown'
      placeholder='Choose category'
      defaultValue={'default'}
    >
      <option value='default' disabled hidden>
        Choose category
      </option>
      <option value=''>All</option>
      <option value=''>Loren</option>
      <option value=''>Ipsum</option>
    </select>
  );
};

export default Categories;
