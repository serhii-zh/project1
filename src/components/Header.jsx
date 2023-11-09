import FavoritesIcon from './ui/FavoritesIcon';
import ShoppingCart from './ui/ShoppingCart';
import styles from '../styles/components/Header.module.css';
import Logo from './ui/Logo';
import { currentUser } from '../store/slices/currentUserSlice';
import RegisterLogin from './ui/RegisterLogin';
import UserBlock from './ui/UserBlock';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userToken } from '../services/axiosInstances';
import { getAccountData } from '../store/thunks/userThunks';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(currentUser);

  useEffect(() => {
    userToken && dispatch(getAccountData());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.logoTitleBlock}>
        <Logo />
        <h2>Everything U Need</h2>
      </div>
      <div className={styles.shoppingLoggingBlock}>
        <div className={styles.favoritesCartBlock}>
          <FavoritesIcon />
          <ShoppingCart />
        </div>
        {userData ? <UserBlock /> : <RegisterLogin />}
      </div>
    </header>
  );
};

export default Header;
