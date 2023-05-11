import FilterBlock from './FilterBlock/FilterBlock';
import ItemsBlock from './ItemsBlock/ItemsBlock';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.main}>
      <FilterBlock />
      <ItemsBlock />
    </div>
  );
};

export default Products;
