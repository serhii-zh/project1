import styles from './FilterBlock.module.css';

const FilterBlock = () => {
  return (
    <div className={styles.filterBlock}>
      <input
        className={styles.search}
        type='text'
        name='search-field'
        id='search-field'
        placeholder='Search products by name'
      />
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
    </div>
  );
};

export default FilterBlock;
