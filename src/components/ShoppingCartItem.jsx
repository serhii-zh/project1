import { useState } from 'react';
import styles from '../styles/components/ShoppingCartItem.module.css';
import { QuantitySelector } from './QuantitySelector';
import { StyledIcon } from './ui/StyledIcon';
import trashBin from '../images/bin.png';

export const ShoppingCartItem = ({
  cartItem,
  removeFromCart,
  onQtyUpdated,
}) => {
  const [itemQty, setItemQty] = useState(cartItem.itemQty);

  // useCallback
  const updateQty = (qty) => {
    setItemQty(qty);
    onQtyUpdated(cartItem.item.id, qty);
  };

  return (
    <article className={styles.shoppingCartItem}>
      <div className={styles.imageBlock}>
        <img
          className={styles.itemImage}
          src={cartItem.item.picture}
          alt={cartItem.item.title}
        />
      </div>

      <div className={styles.mainBlock}>
        <h4 className={styles.itemTitle}>{cartItem.item.title}</h4>
        <div className={styles.itemOptions}>
          <StyledIcon
            src={trashBin}
            onClick={() => removeFromCart(cartItem.item.id)}
          />
          <QuantitySelector itemQty={itemQty} setItemQty={updateQty} />
        </div>
      </div>

      <div className={styles.priceBlock}>
        <div>Price:</div>
        <div>${cartItem.item.price * itemQty}</div>
      </div>
    </article>
  );
};
