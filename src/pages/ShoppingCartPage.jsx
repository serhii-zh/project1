import { ShoppingCartItem } from '../components/ShoppingCartItem';
import styles from '../styles/pages/ShoppingCartPage.module.css';

export const ShoppingCartPage = () => {
  return (
    <section className={styles.shoppingCartPage}>
      <h2 className={styles.pageTitle}>My Cart</h2>
      <div className={styles.cartContainer}>
        <div className={styles.addedItems}>
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.customerInfo}>form with customer data</div>
          <div className={styles.totalInfo}>
            <div># of items</div>
            <div>total price</div>
          </div>
          <div className={styles.orderButtons}>
            <button>confirm purchase</button>
            <button>continue shopping</button>
          </div>
        </div>
      </div>
    </section>
  );
};
