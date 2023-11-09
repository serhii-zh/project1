import FilterContainer from '../containers/FilterContainer';
import ItemsContainer from '../containers/ItemsContainer';
import styles from '../styles/pages/ProductsPage.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.products}>
      <FilterContainer />
      <ItemsContainer />
    </div>
  );
};

export default ProductsPage;
