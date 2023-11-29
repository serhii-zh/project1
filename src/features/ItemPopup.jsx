import styles from '../styles/features/ItemPopup.module.css';
import { createPortal } from 'react-dom';
import close from '../images/close.png';
import { QuantitySelector } from '../components/QuantitySelector';
import { useState, useEffect } from 'react';
import { StyledButton } from '../components/ui/StyledButton';
import { useLocalStorageCart } from '../hooks/useLocalStorageCart';
import tick from '../images/tick.png';

export const ItemPopup = ({
  isShown,
  handleFavoriteClick,
  handleClose,
  item,
  handleAddedToCart,
  showAddedToCart,
}) => {
  const { itemsInCart, addToCart, removeFromCart } = useLocalStorageCart();
  const [itemQty, setItemQty] = useState(1);
  const isInCart = itemsInCart.some((e) => e.item.id === item.id);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const content = (
    <>
      <div className={styles.blurBg}></div>
      <div className={styles.itemInfo}>
        <img
          className={styles.close}
          src={close}
          alt='Close'
          onClick={() => handleClose(isShown)}
        />
        <div className={styles.itemBody}>
          <div className={styles.basicInfo}>
            <div className={styles.image}>
              <img src={item.picture} alt={item.title} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>
                {item.description ? item.description : 'No description'}
              </p>
              <div className={styles.price}>
                PRICE: <span>${item.price}</span>
              </div>
              <QuantitySelector itemQty={itemQty} setItemQty={setItemQty} />
              <div>
                <div className={styles.totalItems}>
                  Items: <span>{itemQty}</span>
                </div>
                <div className={styles.totalPrice}>
                  Total:
                  <span>${itemQty * item.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.addButtons}>
              <StyledButton
                $orange={isInCart}
                onClick={() =>
                  isInCart
                    ? removeFromCart(item.id)
                    : (addToCart(item, itemQty),
                      handleClose(isShown),
                      handleAddedToCart(showAddedToCart))
                }
              >
                {isInCart ? (
                  <div>
                    ADDED TO CART
                    <img src={tick} alt='added' className={styles.tick} />
                  </div>
                ) : (
                  'ADD TO CART'
                )}
              </StyledButton>

              <StyledButton
                $orange={item.favorite}
                onClick={() => handleFavoriteClick(item.id)}
              >
                {item.favorite ? (
                  <div>
                    ADDED TO FAVORITES
                    <img src={tick} alt='added' className={styles.tick} />
                  </div>
                ) : (
                  'ADD TO FAVORITES'
                )}
              </StyledButton>
            </div>
            <StyledButton $orange={true}>BUY NOW</StyledButton>
          </div>
        </div>
      </div>
    </>
  );
  return createPortal(content, document.getElementById('portal'));
};
