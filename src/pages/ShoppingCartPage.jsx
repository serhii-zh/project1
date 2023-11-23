import styles from '../styles/pages/ShoppingCartPage.module.css';
import { ShoppingCartItem } from '../components/ShoppingCartItem';
import { StyledButton } from '../components/ui/StyledButton';
import { useLocalStorageCart } from '../hooks/useLocalStorageCart';

export const ShoppingCartPage = () => {
  const [itemsInCart, addToCart, removeFromCart] = useLocalStorageCart();

  const handleConfirmPurchase = () => {
    console.log('confirm');
  };

  const handleContinueShopping = () => {
    console.log('continue');
  };

  return (
    <section className={styles.shoppingCartPage}>
      <h2 className={styles.pageTitle}>My Cart</h2>
      <div className={styles.cartContainer}>
        <div className={styles.addedItems}>
          {itemsInCart.map((item) => (
            <ShoppingCartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.customerInfo}>form with customer data</div>
          <div className={styles.totalInfo}>
            <div># of items</div>
            <div>total price</div>
          </div>
          <div className={styles.orderButtons}>
            <StyledButton $orange={true} onClick={handleConfirmPurchase}>
              Confirm purchase
            </StyledButton>
            <StyledButton onClick={handleContinueShopping}>
              Continue shopping
            </StyledButton>
          </div>
        </div>
      </div>
    </section>
  );
};
