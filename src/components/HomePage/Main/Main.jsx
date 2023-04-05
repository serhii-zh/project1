import FilterBlock from './FilterBlock/FilterBlock';
import ItemsBlock from './ItemsBlock/ItemsBlock';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <FilterBlock />
      <ItemsBlock />
    </main>
  );
};

export default Main;
