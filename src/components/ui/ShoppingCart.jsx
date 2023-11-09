import styles from '../../styles/components/ui/ShoppingCart.module.css';
import cartWhite from '../../images/cart_white.png';

export const ShoppingCart = () => {
  return (
    <img
      src={cartWhite}
      alt='Shopping Cart Icon'
      className={styles.shoppingCartWhite}
    />
  );
};
