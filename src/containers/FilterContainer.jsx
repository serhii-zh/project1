import styles from '../styles/containers/FilterContainer.module.css';
import CategoriesDropdown from '../components/CategoriesDropdown';
import SearchField from '../components/SearchField';
import SortingDropdown from '../components/SortingDropdown';

const FilterContainer = () => {
  return (
    <div className={styles.filterBlock}>
      <SearchField />
      <CategoriesDropdown />
      <SortingDropdown />
    </div>
  );
};

export default FilterContainer;
