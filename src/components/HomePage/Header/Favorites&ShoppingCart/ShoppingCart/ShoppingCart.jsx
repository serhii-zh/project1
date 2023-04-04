import styles from './ShoppingCart.module.css'
import cartWhite from '../../../../../images/cart_white.png'

const ShoppingCart = () => {
  return (
    <img src={cartWhite} alt="Shopping Cart Icon" className={styles.shoppingCartWhite} />
  )
}

export default ShoppingCart