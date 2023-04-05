import Favorites from './Favorites&ShoppingCart/Favorites/Favorites';
import ShoppingCart from './Favorites&ShoppingCart/ShoppingCart/ShoppingCart';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import LogIn from './Register&LogIn/LogIn/LogIn';
import Register from './Register&LogIn/Register/Register';
import delimiter from '../../../images/vertical_bar.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoTitleBlock}>
        <Logo />
        <h2>Everything U Need</h2>
      </div>
      <div className={styles.shoppingLoggingBlock}>
        <div className={styles.favoritesCartBlock}>
          <Favorites />
          <ShoppingCart />
        </div>
        <div className={styles.registrationLogInBlock}>
          <Register />
          <img src={delimiter} alt='delimiter' />
          <LogIn />
        </div>
      </div>
    </header>
  );
};

export default Header;
