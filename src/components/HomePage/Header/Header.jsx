import Favorites from './Favorites&ShoppingCart/Favorites/Favorites';
import ShoppingCart from './Favorites&ShoppingCart/ShoppingCart/ShoppingCart';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import { useSelector } from 'react-redux';
import { currentUser } from '../../../store/slices/currentUserSlice';
import RegisterLogin from './Register&LogIn/RegisterLogin';
import UserBlock from './UserBlock/UserBlock';

const Header = () => {
  const user = useSelector(currentUser);

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
        {user ? <UserBlock /> : <RegisterLogin />}
      </div>
    </header>
  );
};

export default Header;
