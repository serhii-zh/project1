import { useState } from 'react';
import styles from '../styles/components/ShoppingCartItem.module.css';
import { QuantitySelector } from './QuantitySelector';
import { StyledIcon } from './ui/StyledIcon';
import trashBin from '../images/bin.png';

export const ShoppingCartItem = () => {
  const [itemsNumber, setItemsNumber] = useState(1);

  const handleBinClick = () => {
    console.log('bin click');
  };

  return (
    <article className={styles.shoppingCartItem}>
      <div className={styles.imageBlock}>imageBlock</div>

      <div className={styles.mainBlock}>
        <h4 className={styles.itemTitle}>title</h4>
        <div className={styles.itemOptions}>
          <StyledIcon src={trashBin} onClick={handleBinClick} />
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
