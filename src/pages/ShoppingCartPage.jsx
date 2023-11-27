import styles from '../styles/pages/ShoppingCartPage.module.css';
import { ShoppingCartItem } from '../components/ShoppingCartItem';
import { StyledButton } from '../components/ui/StyledButton';
import { useLocalStorageCart } from '../hooks/useLocalStorageCart';

export const ShoppingCartPage = () => {
  const { itemsInCart, removeFromCart } = useLocalStorageCart();
  const totalPrice = itemsInCart.reduce((total, itemEntry) => {
    return total + itemEntry.item.price * itemEntry.itemQty;
  }, 0);

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
          {itemsInCart.map((cartItem) => (
            <ShoppingCartItem
              key={cartItem.item.id}
              cartItem={cartItem}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.customerInfo}>form with customer data</div>
          <div className={styles.totalInfo}>
            <div className={styles.totalEntry}>
              <div>Items:</div>
              <div>{itemsInCart.length}</div>
            </div>
            <div className={styles.totalEntry}>
              <div>Total:</div>
              <div>${totalPrice}</div>
            </div>
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
