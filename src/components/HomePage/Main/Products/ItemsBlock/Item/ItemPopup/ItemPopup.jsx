import { createPortal } from 'react-dom';
import styles from './ItemPopup.module.css';
import close from '../../../../../../../images/close.png';
import Counter from './Counter/Counter';
import { useState, useEffect } from 'react';
import StyledButton from '../../../../../../Button/StyledButton';

const ItemPopup = ({
  isShown,
  handleFavoriteClick,
  handleClose,
  item,
}) => {
  const [itemsNumber, setItemsNumber] = useState(1);

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
              <Counter
                itemsNumber={itemsNumber}
                setItemsNumber={setItemsNumber}
              />
              <div>
                <div className={styles.totalItems}>
                  Items: <span>{itemsNumber}</span>
                </div>
                <div className={styles.totalPrice}>
                  Total: <span>${itemsNumber * item.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.addButtons}>
              <StyledButton>ADD TO CART</StyledButton>

              <StyledButton
                onClick={() => handleFavoriteClick(item.id)}
              >
                {item.favorite ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
              </StyledButton>
            </div>
            <StyledButton $orange='true'>BUY NOW</StyledButton>
          </div>
        </div>
      </div>
    </>
  );
  return createPortal(content, document.getElementById('portal'));
};

export default ItemPopup;
