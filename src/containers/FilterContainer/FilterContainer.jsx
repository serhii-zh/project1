import styles from './FilterContainer.module.css';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import Sorting from '../../components/Sorting/Sorting';

const FilterContainer = () => {
  return (
    <div className={styles.filterBlock}>
      <Search />
      <Categories />
      <Sorting />
    </div>
  );
};

export default FilterContainer;
