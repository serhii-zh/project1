import { useState } from 'react';
import styles from '../styles/components/ShoppingCartItem.module.css';
import { QuantitySelector } from './QuantitySelector';
import { StyledIcon } from './ui/StyledIcon';
import trashBin from '../images/bin.png';

export const ShoppingCartItem = ({ item, removeFromCart }) => {
  const [itemsNumber, setItemsNumber] = useState(1);

  return (
    <article className={styles.shoppingCartItem}>
      <div className={styles.imageBlock}>
        <img className={styles.itemImage} src={item.picture} alt={item.title} />
      </div>

      <div className={styles.mainBlock}>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <div className={styles.itemOptions}>
          <StyledIcon src={trashBin} onClick={() => removeFromCart(item.id)} />
          <QuantitySelector
            itemsNumber={itemsNumber}
            setItemsNumber={setItemsNumber}
          />
        </div>
      </div>

      <div>
        <div>Price:</div>
        <div>000</div>
      </div>
    </article>
  );
};
