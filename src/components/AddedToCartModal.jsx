import styles from '../styles/components/AddedToCartModal.module.css';
import { createPortal } from 'react-dom';
import { StyledIcon } from './ui/StyledIcon';
import close from '../images/close.png';
import { useEffect } from 'react';

export const AddedToCartModal = ({
  showAddedToCart,
  handleClose,
  itemTitle,
}) => {
  useEffect(() => {
    const modalTimer = setTimeout(() => {
      handleClose(showAddedToCart);
    }, 5000);

    return () => {
      clearTimeout(modalTimer);
    };
  }, [handleClose, showAddedToCart]);

  const content = (
    <div className={styles.addedModal}>
      <p className={styles.message}>
        <span className={styles.itemTitle}> {itemTitle} </span>
        {` has been successfully added to cart.`}
      </p>
      <StyledIcon src={close} onClick={() => handleClose(showAddedToCart)} />
    </div>
  );

  return createPortal(content, document.getElementById('portal'));
};
