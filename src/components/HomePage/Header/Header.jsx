import Favorites from './Favorites&ShoppingCart/Favorites/Favorites';
import ShoppingCart from './Favorites&ShoppingCart/ShoppingCart/ShoppingCart';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import {
  currentUser,
  getAccountData,
  token,
} from '../../../store/slices/currentUserSlice';
import RegisterLogin from './Register&LogIn/RegisterLogin';
import UserBlock from './UserBlock/UserBlock';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(currentUser);
  const userToken = useSelector(token);

  useEffect(() => {
    if (userToken) {
      dispatch(getAccountData(userToken));
    }
  }, [dispatch, userToken]);

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
        {userData ? <UserBlock /> : <RegisterLogin />}
      </div>
    </header>
  );
};

export default Header;
