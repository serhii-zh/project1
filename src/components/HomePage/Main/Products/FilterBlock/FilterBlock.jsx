import Categories from './Categories/Categories';
import styles from './FilterBlock.module.css';
import Search from './Search/Search';
import Sorting from './Sorting/Sorting';

const FilterBlock = () => {
  return (
    <div className={styles.filterBlock}>
      <Search />
      <Categories />
      <Sorting />
    </div>
  );
};

export default FilterBlock;
