import FilterContainer from '../../containers/FilterContainer/FilterContainer';
import ItemsContainer from '../../containers/ItemsContainer/ItemsContainer';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.products}>
      <FilterContainer />
      <ItemsContainer />
    </div>
  );
};

export default ProductsPage;
