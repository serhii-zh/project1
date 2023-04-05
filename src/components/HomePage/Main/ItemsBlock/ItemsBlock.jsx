import Item from './Item/Item';
import styles from './ItemsBlock.module.css';

const ItemsBlock = () => {
  return (
    <div className={styles.itemsBlock}>
      <ul className={styles.itemsList}>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </div>
  );
};

export default ItemsBlock;
